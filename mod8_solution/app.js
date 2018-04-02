(function () {
'use strict';

  angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .directive('foundItems', FoundItemsDirective);

  function FoundItemsDirective() {
    var ddo = {
      templateUrl: 'foundItems.html',
      scope: {
        found: '<',
        onRemove: '&'
      },
      controller: NarrowItDownController,
      controllerAs: 'narrowDown',
      bindToController: true
    };

    return ddo;
  }

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var narrowDown = this;

    narrowDown.searchTerm = "";
    narrowDown.found = [];

    narrowDown.narrow = function() {
      if (narrowDown.searchTerm === "") {
        narrowDown.found = [];
        return;
      }

      var promise = MenuSearchService.getMatchedMenuItems(narrowDown.searchTerm);
      promise.then(function (response) {
        narrowDown.found = response;
      })
      .catch(function (error) {
        console.log("Error in narrow: " + error);
      })
    };

    narrowDown.removeItem = function (itemIndex) {
      narrowDown.found.splice(itemIndex, 1);
    };
  }

  MenuSearchService.$inject = ['$http'];
  function MenuSearchService($http) {
    var service = this;

    service.getMatchedMenuItems = function (searchTerm) {
      return $http({
        method: "GET",
        url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
      }).then(function (result) {
        var foundItems = [];
        var menuItems = result.data.menu_items;

        for (var i = 0; i < menuItems.length; i++) {
          if (menuItems[i].description.includes(searchTerm)) {
            foundItems.push(menuItems[i]);
          }
        }

        return foundItems;
      });
    };
  }

})();
