'use strict';

var VersionService = angular.module('snorql.version.interpolate-filter', []);

VersionService.filter('interpolateVersion', ['version', function(version) {
  return function(text) {
    return String(text).replace(/\%VERSION\%/mg, version);
  };
}]);

VersionService.filter('interpolateBuild', ['build', function (build) {
  return function (text) {
    return String(text).replace(/\%BUILD\%/mg, build);
  };
}])
