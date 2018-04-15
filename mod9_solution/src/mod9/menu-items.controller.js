(function () {
  'use strict';

angular.module('MenuApp')
  .controller('MenuItemController', MenuItemController);

  MenuItemController.$inject = ['$stateParams', 'items'];
  function MenuItemController($stateParams, items) {
    var menuItem = this;
    var item = items[$stateParams.itemId];
    menuItem.name = item.name;
    menuItem.quantity = item.quantity;
    menuItem.description = item.description;
  }

})();
