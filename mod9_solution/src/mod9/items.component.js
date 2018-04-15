(function () {
  'use strict';

angular.module('MenuApp')
  .component('menuItems', {
    templateUrl: 'src/mod9/templates/items.template.html',
    bindings: {
      items: '<'
    }
  });

})();
