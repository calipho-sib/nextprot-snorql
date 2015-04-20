'use strict';

angular.module('snorql.version.version-directive', [])

.directive('sqBuildVersion', ['version', 'build', function (version, build) {

  return function (scope, elm, attrs) {

    var content = version;

    if (!isNaN(build))
      content += " (build "+build+")";

    elm.text(content);
  };
}]);
