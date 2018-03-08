(function() {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope', '$filter'];

function LunchCheckController($scope) {
    $scope.result = '';
    $scope.color = 'green';

    $scope.submitHandler = function() {
        var parsedString = $scope.itemsString && parseString($scope.itemsString);

        switch (true) {
            case !parsedString:
                $scope.result = "Please enter data first";
                $scope.color = 'red';
                break;
            case parsedString.length > 3:
                $scope.result = "Too much!";
                $scope.color = 'green';
                break;
            default:
                $scope.result = "Enjoy!";
                $scope.color = 'green';
        }
    }
}

function parseString(string) {
    return string.split(',').filter(Boolean);
}

})();
