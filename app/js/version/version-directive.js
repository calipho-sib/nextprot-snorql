'use strict';

angular.module('snorql.version.version-directive', [])

.directive('sqVersion', ['version', function(version) {

  return function(scope, elm, attrs) {
    elm.text(version);
  };
}])
.directive('sqBuild', ['build', function (build) {

  return function (scope, elm, attrs) {
    elm.text(build);
  };
}])
.directive('sqBuildVersion', ['version', 'build', function (version, build) {

  return function (scope, elm, attrs) {

    var content = version;

    if (!isNaN(build))
      content += " (build "+build+")";

    elm.text(content);
  };
}]);
