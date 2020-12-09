'use strict';

angular.module('snorql.version', [])
    .constant('RELEASE_INFOS', {
        'version': '2.12.0',
        'branch': 'BRANCH_NAME',
        "isProduction": 'IS_PRODUCTION', // i.e 'true'
        'build': 'BUILD_NUMBER', // '926'
        'githash': 'GIT_HASH' // 'e3a1a30'
    });
