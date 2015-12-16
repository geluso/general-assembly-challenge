var controllers = angular.module('searchApp');

controllers.controller('SearchController', ['$scope', 'ApiService', function($scope, ApiService) {
  $scope.results = [];
  $scope.error = false;

  // Define a default placeholder for the search box.
  $scope.placeholder = "Star Wars";

  $scope.search = function(terms) {
    // Default back to the placeholder if no terms are provided.
    terms = terms || $scope.placeholder;

    // Optimistically reset error to false at the start of each search.
    $scope.error = false;

    // Pass the terms to the API an have it initiate the search.
    ApiService.search(terms).then(function(results) {
      // Hook up the results so the view can access them.
      $scope.results = results;
    }, function(error) {
      // There was an error. Place the error on the scope so it
      // can be shown on the page.
      $scope.error = error;

      // Remove the previous results if an error occurred.
      $scope.results = [];
    });
  };
}]);
