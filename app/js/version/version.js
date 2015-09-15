'use strict';

angular.module('snorql.version', [
  'snorql.version.version-directive'
])
    .value('version', '0.1.5')
    .value('build', 'NX_BUILD')
    .value('githash', 'GIT_HASH');
