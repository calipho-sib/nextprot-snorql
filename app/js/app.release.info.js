(function (angular, undefined) {
    'use strict';

    angular.module('app.release.info', [])
        .controller('ReleaseInfoCtrl', ReleaseInfoCtrl)
        .factory('releaseInfoService', releaseInfoService)
    ;

    ReleaseInfoCtrl.$inject = ['$scope','releaseInfoService', 'RELEASE_INFOS'];
    function ReleaseInfoCtrl($scope, releaseInfoService, RELEASE_INFOS) {

        $scope.currentYear=new Date().getFullYear();

        function formatReleaseInfos(releaseInfos) {
            var content = "v" + releaseInfos.version;

            if (!isNaN(releaseInfos.build) && releaseInfos.isProduction !== 'true') {

                content += " (build " + releaseInfos.build;
                content += "#" + releaseInfos.githash;
                content += " [branch " + releaseInfos.branch + "]";
                content += ")";
            }
            return content;
        }
        $scope.releaseInfosFormatted = formatReleaseInfos(RELEASE_INFOS);

        $scope.releaseInfo = {
            databaseRelease: "",
            apiRelease: ""
        };

        // fetching release info versions
        releaseInfoService.getReleaseInfo().$promise.then(function(releaseInfo) {

            $scope.releaseInfo.databaseRelease = releaseInfo.versions.databaseRelease;
            $scope.releaseInfo.apiRelease = releaseInfo.versions.apiRelease;
        });
    }

    releaseInfoService.$inject = ['$resource', 'config'];
    function releaseInfoService($resource, config) {

        var releaseInfoResource = $resource(
            config.apiUrl + '/release-info.json',
            {},
            {get : {method: "GET"}});

        var ReleaseInfoService = function () {

        };

        ReleaseInfoService.prototype.getReleaseInfo = function () {
            return releaseInfoResource.get();
        };

        return new ReleaseInfoService();
    }

})(angular); //global variable
