(function () {
  'use strict';

  angular.module('restaurant')
    .service('UserService', UserService);

  UserService.$inject = ['$http']
  function UserService($http) {
    var service = this;

    var user = null;

    service.signUp = function (newUser) {
      user = newUser;
    };

    service.getUser = function () {
      return user;
    };

    service.getMenuItems = function(menuItem) {
      return $http({
        method: "GET",
        url: ("https://fierce-fjord-57869.herokuapp.com/menu_items/" + menuItem + ".json")
      }).then(function (result) {
          return result.data;
      });
    };
  }

})();
