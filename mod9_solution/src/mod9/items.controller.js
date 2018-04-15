(function () {
  'use strict';

angular.module('MenuApp')
  .controller('MenuItemsController', MenuItemsController);

  MenuItemsController.$inject = ['$stateParams', 'items'];
  function MenuItemsController($stateParams, items) {
    var menuItems = this;
    menuItems.items = items;
  }

})();
