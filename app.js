(function () {
  'use strict';

  angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.items = '';
    $scope.message = '';
    $scope.after = false;

    $scope.checkLunch = function () {
      if ($scope.items.trim().length === 0) {
        $scope.empty = true;
      } else {
        $scope.after = true;
        $scope.empty = false;

        var menuItems = $scope.items.split(',');
        
        if (menuItems.length <= 3) {
          $scope.message = 'Enjoy!';
        } else {
          $scope.message = 'Too much!';
        }
      }
    };
  }
})();