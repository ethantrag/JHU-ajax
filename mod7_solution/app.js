(function () {
'use strict';

  angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var toBuy = this;

    toBuy.items = ShoppingListCheckOffService.getBuyItems();

    toBuy.buyItem = function(itemIndex) {
      ShoppingListCheckOffService.buyItem(itemIndex);
    }
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var bought = this;

    bought.items = ShoppingListCheckOffService.getBoughtItems();
  }

  function ShoppingListCheckOffService() {
    var service = this;

    var toBuyList = [
      {name:"cookies", quantity: 10},
      {name:"chips", quantity: 4},
      {name:"soda", quantity: 7},
      {name:"bread", quantity: 2},
      {name:"lunch meat", quantity: 14}
    ];
    var boughtList = [];

    service.buyItem = function (itemIndex) {
      var itemToBuy = toBuyList[itemIndex];
      boughtList.push(itemToBuy);
      toBuyList.splice(itemIndex, 1);
    };

    service.getBuyItems = function () {
      return toBuyList;
    };

    service.getBoughtItems = function () {
      return boughtList;
    };
}

})();
