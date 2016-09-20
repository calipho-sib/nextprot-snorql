(function (angular, undefined) {
    'use strict';

    angular.module('app.release.info', [])
        .controller('ReleaseInfoCtrl', ReleaseInfoCtrl)
        .factory('releaseInfoService', releaseInfoService)
    ;

    ReleaseInfoCtrl.$inject = ['$scope','releaseInfoService', 'RELEASE_INFOS'];
    function ReleaseInfoCtrl($scope, releaseInfoService, RELEASE_INFOS) {

        function formatReleaseInfos(releaseInfos) {
            var content = "v" + releaseInfos.version;

            if (!isNaN(releaseInfos.build)) {

                content += " (build " + releaseInfos.build;
                if (releaseInfos.isProduction !== 'true') content += "#" + releaseInfos.githash;
                content += ")";
            }
            return content;
        }
        $scope.releaseInfosFormatted = formatReleaseInfos(RELEASE_INFOS);

        releaseInfoService.getReleaseInfo().$promise.then(function(data){

            var index = {
                databaseRelease: [],
                apiRelease: [],
                datasources: [],
                tagStatistics:[]
            };

            index.databaseRelease = data.release.databaseRelease;
            index.apiRelease = data.release.apiRelease;

            _.each(data.release.datasources, function(ds) {
                index.datasources.push(ds);
            });

            _.each(data.release.tagStatistics, function(ts) {
                var stat = {
                    description: ts.description,
                    count: ts.count
                };

                var dbSpecies  = _.find(index.tagStatistics, function(obj) { return obj.category == ts.categroy});
                if (dbSpecies) {
                    dbSpecies.data.push(stat);
                } else {
                    index.tagStatistics.push({
                        category: ts.categroy,
                        data: [stat]
                    });
                }

            });

            $scope.releaseInfo = index;
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
