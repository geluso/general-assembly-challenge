var controllers = angular.module('searchApp');

controllers.controller('DetailController', ['$scope', '$routeParams', 'ApiService',
    function($scope, $routeParams, ApiService) {
  // Obtain the movie ID from the route params.
  var id = $routeParams.id;

  // Use the API to look up movie details.
  ApiService.getDetails(id).then(function(response) {
    $scope.details = response.data;
  });

  // Define the list of properties we don't want to display.
  var blacklisted = ["Title", "Year", "Poster", "Plot"];

  // Returns true if the given property is not in the black list.
  $scope.isPropertyDisplayable = function(property) {
    if (blacklisted.indexOf(property) >= 0) {
      return false;
    }
    return true;
  };

  // Adds the current movie to favorites.
  $scope.addToFavorites = function() {
    var name = $scope.details.Title;
    var oid = $scope.details.imdbID;

    ApiService.addFavorite(name, oid).then(function(result) {
      // Success
    }, function(error) {
      // Error
    });
  };
}]);
