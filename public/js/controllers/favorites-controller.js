var controllers = angular.module('searchApp');

controllers.controller('FavoritesController', ['$scope', 'ApiService', function($scope, ApiService) {
  $scope.title = "FavoritesController";

  $scope.favorites = [];

  ApiService.getFavorites().then(function(response) {
    $scope.favorites = response.data;
  }, function(error) {
    // Error
  });
}]);
