var app = angular.module('projectTrackingApp', []);

app.controller('homeCtrl', function($scope) {
    $scope.userName = 'ADMIN';
    $scope.userInitial = 'A';
    $scope.userIcon = 'A';

    $scope.dropdowns = {
        projectLogger: false,
        report: false
    };

    $scope.toggleDropdown = function(dropdown) {
        $scope.dropdowns[dropdown] = !$scope.dropdowns[dropdown];
    };
 
    $scope.searchQuery = '';
    $scope.search = function() {
        alert('Searching for: ' + $scope.searchQuery);
    };

    $scope.onSearchKeyPress = function(event) {
        if (event.key === 'Enter') {
            $scope.search();
        }
    };

    $scope.clearSearch = function() {
        $scope.searchQuery = '';
    };
});
