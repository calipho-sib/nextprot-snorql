'use strict';

angular.module('snorql.version', [
  'snorql.version.version-directive'
])
    .constant('VERSION_INFOS', {
        'version': '0.1.5',
        'isProductionVersion': 'NX_TRACKING_PROD',
        'build': 'NX_BUILD',
        'githash': 'GIT_HASH'
    });
