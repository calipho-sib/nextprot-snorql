'use strict';

angular.module('snorql.version', [
  'snorql.version.version-directive'
])

.value('version', '0.1.2')
.value('build', 'NX_BUILD');