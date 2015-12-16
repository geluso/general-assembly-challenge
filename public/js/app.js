var app = angular.module('searchApp', [
  'ngRoute'
]);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'js/templates/search.html',
      controller: 'SearchController'
    }).
    when('/favorites', {
      templateUrl: 'js/templates/favorites.html',
      controller: 'FavoritesController'
    }).
    when('/details', {
      templateUrl: 'js/templates/details.html',
      controller: 'DetailController'
    }).
    otherwise({
      redirectTo: '/'
    });
}]);
