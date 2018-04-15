(function () {
  'use strict';

angular.module('MenuApp')
  .component('categories', {
    templateUrl: 'src/mod9/templates/categories.template.html',
    bindings: {
      items: '<'
    }
  });

})();
