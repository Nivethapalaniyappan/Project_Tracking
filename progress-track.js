angular.module('projectTrackingApp', [])
.controller('MainController', ['$scope',function($scope) {
    this.totalProjects = 12;
    this.softwareProjects = 5;
    this.hardwareProjects = 7;

    var ctx = document.getElementById('progressChart').getContext('2d');
    var progressChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Completed', 'In progress', 'Not completed'],
            datasets: [{
                data: [60, 28, 12],
                backgroundColor: ['#4caf50', '#2196f3', '#f44336']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
    $scope.dropdowns = {
        projectLogger: false,
        report: false
    };

    $scope.toggleDropdown = function(dropdown) {
        $scope.dropdowns[dropdown] = !$scope.dropdowns[dropdown];
    };
}]);
