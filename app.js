(function() {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.items = '';
        $scope.message = '';
        $scope.checked = false;

        $scope.checkLunch = function() {
            if ($scope.items.trim().length === 0) {
                $scope.empty = true;
            } else {
                $scope.checked = true;
                $scope.empty = false;
                var menuItems = $scope.items.split(',');
                var menuItemsFiltered = menuItems.filter(function(v) {
                    return v.trim() !== '';
                });

                if (menuItemsFiltered.length <= 3) {
                    $scope.message = 'Enjoy!';
                } else {
                    $scope.message = 'Too much!';
                }
            }
        };
    }
})();