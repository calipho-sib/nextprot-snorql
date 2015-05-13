'use strict';

angular.module('snorql.version', [
  'snorql.version.version-directive'
])

.value('version', '0.1.4')
.value('build', 'NX_BUILD');
