var controllers = angular.module('searchApp');

controllers.controller('SearchController', ['$scope', 'ApiService', function($scope, ApiService) {
  $scope.results = [];
  $scope.error = false;

  // Define a default placeholder for the search box.
  $scope.placeholder = "Star Wars";

  $scope.search = function(terms) {
    // Default back to the placeholder if no terms are provided.
    terms = terms || $scope.placeholder;

    // Pass the terms to the API an have it initiate the search.
    ApiService.search(terms).then(function(response) {
      // Hook up the results so the view can access them.
      $scope.results = response.data.Search;
    }, function(error) {
      // Error
    });
  };
}]);
