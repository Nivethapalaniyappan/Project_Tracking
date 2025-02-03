var app = angular.module('projectTrackingApp', []);

app.controller('homeCtrl', function($scope) {
    $scope.userName = 'NIVETHA P';
    $scope.userInitial = 'N';
    $scope.userIcon = 'NP';

    $scope.dropdowns = {
        projectLogger: false,
        report: false
    };

    $scope.activePage = 'home';

    $scope.toggleDropdown = function(dropdown) {
        $scope.dropdowns[dropdown] = !$scope.dropdowns[dropdown];
    };

    $scope.setActivePage = function(page) {
        $scope.activePage = page;
    };

    $scope.formData = {};

    $scope.submitForm = function() {
        alert('Form submitted successfully!');
        console.log($scope.formData);
    };
});

// Custom directive for file input
app.directive('fileModel', ['$parse', function($parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;

            element.bind('change', function() {
                scope.$apply(function() {
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
}]);
