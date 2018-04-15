(function () {
  'use strict';

angular.module('MenuApp')
  .component('menuItems', {
    templateUrl: 'src/mod9/templates/menuItems.template.html',
    bindings: {
      items: '<'
    }
  });

})();
