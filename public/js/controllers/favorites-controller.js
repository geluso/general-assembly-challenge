var controllers = angular.module('searchApp');

controllers.controller('FavoritesController', ['$scope', 'SearchService', function($scope, SearchService) {
  $scope.title = "FavoritesController";

  $scope.favorites = [];

  SearchService.getFavorites().then(function(response) {
    $scope.favorites = response.data;
  }, function(error) {
    // Error
  });
}]);
