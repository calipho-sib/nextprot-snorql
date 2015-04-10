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
}]);
