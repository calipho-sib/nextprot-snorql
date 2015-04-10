'use strict';

angular.module('snorql.version', [
  'snorql.version.interpolate-filter',
  'snorql.version.version-directive'
])

.value('version', '1.0.2')
.value('build', 'NX_BUILD');
