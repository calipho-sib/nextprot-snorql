'use strict';

angular.module('snorql.version', [
  'snorql.version.version-directive'
])
    .constant('RELEASE_INFOS', {
        'version': '0.3.0',
        "isProduction": 'IS_PRODUCTION', // i.e 'true'
        'build': 'BUILD_NUMBER', // '926'
        'githash': 'GIT_HASH' // 'e3a1a30'
    });
