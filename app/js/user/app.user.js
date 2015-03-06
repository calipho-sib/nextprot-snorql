(function (angular, undefined) {'use strict';

    angular.module('snorql.user', [
        'snorql.config'
    ]).config(userConfig)
        .factory('user', user)
        .controller('UserCtrl',UserCtrl);

    userConfig.$inject=['$routeProvider'];
    function userConfig($routeProvider) {
        $routeProvider
            .when('/user', { templateUrl: 'partials/user/user-profile.html'})
    }

    //
    // implement user factory
    user.$inject=['$resource','$http','config','$timeout','$rootScope','$location','$cookieStore','auth','$q', 'ipCookie', '$window', 'store'];
    function user($resource, $http, config, $timeout, $rootScope, $location, $cookieStore, auth, $q, ipCookie, $window, store) {

        //
        // default user data for anonymous
        var defaultProfile={
            authorities : [],
            username : 'Guest',
            profile:{}
        };

        //See also the refresh token https://github.com/auth0/auth0-angular/blob/master/docs/refresh-token.md
        $rootScope.$on('$locationChangeStart', function() {
            if(ipCookie('nxprofile') != null){
                user.copy(ipCookie('nxprofile'));
            } else {
                ipCookie.remove('nxprofile');
                ipCookie.remove('nxtoken');
            }
        });

        //
        // create user domain
        var User = function () {

            //
            // init the dao
            this.dao={
                $profile:$resource(config.api.baseUrl + '/user/me', {
                    get: { method: 'GET' }
                })
            };

            //
            // init user profile
            this.profile={};
            angular.extend(this.profile,defaultProfile);
            //
            // wrap promise to this object
            this.$promise=$q.when(this);

            var me = this;
        };

        //
        //
        User.prototype.isAnonymous = function () {
            return this.profile.username === 'Guest';
        };

        //
        // make the always User a promise of the dao usage
        User.prototype.chain=function(promise){
            this.$promise=this.$promise.then(function(){
                return promise;
            },function(){
                return promise;
            });
            return this;
        };

        User.prototype.copy = function(data) {
            angular.extend(this.profile,defaultProfile, data);
            this.profile.username=this.username=data.email;
            return this;
        };

        User.prototype.clear = function() {
            angular.copy(defaultProfile, this.profile);
            return this;
        };


        User.prototype.login = function (cb) {
            var self=this;
            log.console("Try log in");
            auth.signin({popup: true, icon:'img/np.png', authParams: {
                    scope: 'openid email name picture'}},
                function(profile, token) {
                    // Success callback
                    var expirationInDays = 730; // 730 days = 2 years
                    if ($window.location.hostname === "localhost") {
                        ipCookie('nxprofile', profile, { expires: expirationInDays });
                        ipCookie('nxtoken', token, { expires: expirationInDays });
                    } else {
                        ipCookie('nxprofile', profile, { domain: '.nextprot.org', expires: expirationInDays });
                        ipCookie('nxtoken', token, { domain: '.nextprot.org', expires: expirationInDays });
                    }
                    $location.path('/');

                    self.copy(auth.profile);
                    self.username=auth.email;
                    cb()

                }, function(error) {
                    cb(error)
                });
        };

        User.prototype.logout = function (cb) {
            this.clear();
            auth.signout();

            ipCookie.remove('nxprofile');
            ipCookie.remove('nxtoken');

            //legacy remove if it exists (should be removed from June 2015)
            store.remove('profile');
            store.remove('token');
        };

        User.prototype.me = function (cb) {
            var self=this;

            return this.chain(this.dao.$profile.get( function (data) {
                    if(data.username){
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

//
// implement user controller
    UserCtrl.$inject=['$scope','user','flash','config'];
    function UserCtrl($scope, user, flash, config) {
        $scope.user = user;
    }

})(angular);
