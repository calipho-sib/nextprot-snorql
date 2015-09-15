'use strict';

angular.module('snorql.version.version-directive', [])

    .directive('sqBuildVersion', ['RELEASE_INFOS', function (RELEASE_INFOS) {

        return function (scope, elm, attrs) {

            var content = RELEASE_INFOS.version;

            if (!isNaN(RELEASE_INFOS.build)) {

                content += " (build " + RELEASE_INFOS.build;
                if (!RELEASE_INFOS.isProduction) content += "#" + RELEASE_INFOS.githash;
                content += ")";
            }

            elm.text(content);
        };
    }]);
