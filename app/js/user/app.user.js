(function (angular, undefined) {
    'use strict';

    angular.module('snorql.user', [
        'snorql.config'
    ]).config(userConfig)
        .factory('user', user);

    userConfig.$inject = ['$routeProvider'];

    function userConfig($routeProvider) {
        $routeProvider
            .when('/user', {templateUrl: 'partials/user/user-profile.html'})
    }

    //
    // implement user factory
    user.$inject = ['$resource', '$http', 'config', '$timeout', '$rootScope', '$location', 'auth', '$q', 'ipCookie', '$window'];

    function user($resource, $http, config, $timeout, $rootScope, $location, auth, $q, ipCookie, $window) {

        //
        // default user data for anonymous
        var defaultProfile = {
            authorities: [],
            username: 'Guest',
            profile: {}
        };

        //See also the refresh token https://github.com/auth0/auth0-angular/blob/master/docs/refresh-token.md
        $rootScope.$on('$locationChangeStart', function () {
            if (ipCookie('nxprofile') != null) {
                user.copy(ipCookie('nxprofile'));
            } else {
                if ($window.location.hostname === "localhost") {
                    ipCookie.remove('nxprofile', {path: '/'});
                    ipCookie.remove('nxtoken', {path: '/'});
                } else {
                    ipCookie.remove('nxprofile', {path: '/', domain: ".nextprot.org"});
                    ipCookie.remove('nxtoken', {path: '/', domain: ".nextprot.org"});
                }
            }

            const query = $window.location.search;
            const shouldParseResult = query.includes("code=") && query.includes("state=");
            if (shouldParseResult) {
                createAuth0Client({
                    domain: "nextprot.auth0.com",
                    client_id: "7vS32LzPoIR1Y0JKahOvUCgGbn94AcFW",
                    audience: "https://nextprot.auth0.com/api/v2/"
                }).then(function (auth0) {
                    auth0.handleRedirectCallback()
                        .then(function (result) {
                            if (result.appState && result.appState.targetUrl) {
                                showContentFromUrl(result.appState.targetUrl);
                            }

                            auth0.getUser()
                                .then(function (userData) {
                                    auth0.getTokenSilently()
                                        .then(function (token) {

                                            var expirationInDays = 730; // 730 days = 2 years
                                            if ($window.location.hostname === "localhost") {
                                                ipCookie('nxprofile', userData, {
                                                    path: '/',
                                                    expires: expirationInDays
                                                });
                                                ipCookie('nxtoken', token, {path: '/', expires: expirationInDays});
                                            } else {
                                                ipCookie('nxprofile', userData, {
                                                    path: '/',
                                                    domain: '.nextprot.org',
                                                    expires: expirationInDays
                                                });
                                                ipCookie('nxtoken', token, {
                                                    path: '/',
                                                    domain: '.nextprot.org',
                                                    expires: expirationInDays
                                                });
                                            }

                                            user.copy(userData);
                                            user.username = auth.email;
                                            $window.location.href = '/';
                                        });
                                });
                        });
                });
            }

        });

        //
        // create user domain
        var User = function () {

            //
            // init the dao
            this.dao = {
                $profile: $resource(config.apiUrl + '/user/me', {
                    get: {method: 'GET'}
                })
            };

            //
            // init user profile
            this.profile = {};
            angular.extend(this.profile, defaultProfile);
            //
            // wrap promise to this object
            this.$promise = $q.when(this);

            var me = this;
        };

        //
        //
        User.prototype.isAnonymous = function () {
            return this.profile.username === 'Guest';
        };

        //
        // make the always User a promise of the dao usage
        User.prototype.chain = function (promise) {
            this.$promise = this.$promise.then(function () {
                return promise;
            }, function () {
                return promise;
            });
            return this;
        };

        User.prototype.copy = function (data) {
            angular.extend(this.profile, defaultProfile, data);
            this.profile.username = this.username = data.email;
            return this;
        };

        User.prototype.clear = function () {
            angular.copy(defaultProfile, this.profile);
            return this;
        };


        User.prototype.login = function (cb) {
            var self = this;
            try {
                const options = {
                    redirect_uri: $window.location.origin
                };

                // Initialize auth0 client
                var auth0 = null;
                createAuth0Client({
                    domain: "nextprot.auth0.com",
                    client_id: "7vS32LzPoIR1Y0JKahOvUCgGbn94AcFW",
                    audience: "https://nextprot.auth0.com/api/v2/"
                }).then(function (auth0response) {
                    auth0 = auth0response;
                    auth0.loginWithRedirect(options);
                });

            } catch (err) {
                console.error("Log in failed", err);
            }
        };

        User.prototype.logout = function (cb) {
            this.clear();
            var baseUrl = new $window.URL($location.absUrl()).origin;
            createAuth0Client({
                domain: "nextprot.auth0.com",
                client_id: "7vS32LzPoIR1Y0JKahOvUCgGbn94AcFW",
                audience: "https://nextprot.auth0.com/api/v2/"
            }).then(function (auth0) {
                auth0.logout({
                    returnTo: baseUrl
                });
            });

            if ($window.location.hostname === "localhost") {
                ipCookie.remove('nxprofile', {path: '/'});
                ipCookie.remove('nxtoken', {path: '/'});
            } else {
                ipCookie.remove('nxprofile', {path: '/', domain: ".nextprot.org"});
                ipCookie.remove('nxtoken', {path: '/', domain: ".nextprot.org"});
            }

        };

        User.prototype.me = function (cb) {
            var self = this;

            return this.chain(this.dao.$profile.get(function (data) {
                    if (data.username) {
                        return self.copy(data);
                    }

                    //
                    // the passing token is wrong
                    //return self.clear()
                }).$promise
            );
        };

        var user = new User();
        return user;
    }


})(angular);
