'use strict';

angular.module('snorql.version.version-directive', [])

.directive('sqBuildVersion', ['version', 'build', 'githash', function (version, build, githash) {

  return function (scope, elm, attrs) {

    var content = version;

    if (!isNaN(build))
      content += " (build "+build+"#"+githash+")";
    elm.text(content);
  };
}]);
