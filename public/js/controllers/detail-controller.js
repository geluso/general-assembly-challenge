var controllers = angular.module('searchApp');

controllers.controller('DetailController', ['$scope', '$routeParams', 'SearchService',
    function($scope, $routeParams, SearchService) {
  // Obtain the movie ID from the route params.
  var id = $routeParams.id;

  // Use the API to look up movie details.
  SearchService.getDetails(id).then(function(response) {
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
}]);
