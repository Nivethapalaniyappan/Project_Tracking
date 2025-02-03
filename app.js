/*angular.module('projectTrackingApp', [])
  .controller('create-loggerCtrl', ['$location', function($location) {
    $location.path('/collaborative');
  }]);*/


  var app = angular.module('projectTrackingApp', ['ngRoute']);

  app.config(['$routeProvider', function($routeProvider) {
      $routeProvider
          .when('/', {
              templateUrl: 'templates/home.html',
              controller: 'HomeController'
          })
          .when('/create-logger', {
              templateUrl: 'templates/create-logger.html',
              controller: 'FormController'
          })
          .when('/collaborative', {
              templateUrl: 'templates/collaborative.html',
              controller: 'CollaboratorController'
          })
          .otherwise({
              redirectTo: '/'
          });
  }]);
  