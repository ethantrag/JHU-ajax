(function () {
  "use strict";

  angular.module('public')
    .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['UserService'];
  function SignUpController(UserService) {
    var ctrl = this;

    ctrl.reg = UserService.getUser();
    if (ctrl.reg === null) {
      ctrl.saved = false;
      ctrl.reg = {
        firstName: "",
        lastName: "",
        email: "",
        favorite: ""
      };
    } else {
      ctrl.saved = true;
    }

    ctrl.submit = function () {
      var promise = UserService.getMenuItems(ctrl.reg.favorite);
      promise.then(function (response) {
        console.log(response);
        UserService.signUp(ctrl.reg);
        ctrl.saved = true;
        ctrl.invalidFavorite = false;
      })
      .catch(function (error) {
        ctrl.invalidFavorite = true;
      })
    }
  }

})();
