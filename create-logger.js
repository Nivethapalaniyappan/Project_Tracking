angular.module('loggerApp', [])
    .controller('FormController', ['$scope', '$window',function($scope,$window) {
    $scope.formData = {};
    
    $scope.submitForm = function() {
        if ($scope.loggerForm.$valid) {
            alert('Form submitted successfully!');
        }
    };
    $scope.redirectToCollaborative = function(){
        $window.location.href = 'collaborative.html';
    };
    $scope.dropdowns = {
        projectLogger: false,
        report: false
    };

    $scope.toggleDropdown = function(dropdown) {
        $scope.dropdowns[dropdown] = !$scope.dropdowns[dropdown];
    };
}]);