(function () {
'use strict';

  angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {

    $scope.checkLunch = function () {
      var lunch = $scope.menu;
      if (lunch === undefined || lunch === '') {
        $scope.message = 'Please enter data first';
        $scope.color = 'red';
      } else {
        var lunchList = lunch.split(',');
        var count = 0;
        for (var i = 0; i < lunchList.length; i++) {
          if (lunchList[i].trim() !== '') {
            count++;
          }
        }

        if (count <= 3) {
          $scope.message = 'Enjoy';
          $scope.msgClass = '';
        } else {
          $scope.message = 'Too much!';
        }
        $scope.color = 'green';
      }
    };
  }

})();
