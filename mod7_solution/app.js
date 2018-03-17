(function () {
'use strict';

  angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService)
    .filter('price', PriceFilter);

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
      {name:"cookies", quantity: 10, pricePerItem: 2},
      {name:"chips", quantity: 4, pricePerItem: 1},
      {name:"soda", quantity: 7, pricePerItem: 1.5},
      {name:"bread", quantity: 2, pricePerItem: 4.25},
      {name:"lunch meat", quantity: 14, pricePerItem: 1.59}
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

  function PriceFilter() {
    return function (input) {
      input = input || 0;
      var filt = "$$$";
      var inputs = input.toString().split('.');
      if (inputs.length === 1) {
        filt += inputs[0] + ".00";
      } else if (inputs[1].length > 2) {
        filt += inputs[0] + "." + inputs[1].splice(0, 2);
      } else if (inputs[1].length === 2) {
        filt += inputs[0] + "." + inputs[1];
      } else if (inputs[1].length === 1) {
        filt += inputs[0] + "." + inputs[1] + "0";
      } else {
        filt += inputs[0] + ".00";
      }

      return filt;
    }
  }

})();
