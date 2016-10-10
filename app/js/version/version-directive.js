'use strict';

angular.module('snorql.version.version-directive', [])

    .directive('sqBuildVersion', ['RELEASE_INFOS', function (RELEASE_INFOS) {

        return {
            restrict: 'AE',
            replace: true,
            scope: {},
            link: function(scope, element, attrs) {

                var content = RELEASE_INFOS.version;

                if (!isNaN(RELEASE_INFOS.build)) {

                    if (RELEASE_INFOS.isProduction !== 'true') {
                        content += " (build " + RELEASE_INFOS.build;
                        content += "#" + RELEASE_INFOS.githash;
                        content += ")";
                    }
                }

                element.text(content);
            }
        }
    }]);

