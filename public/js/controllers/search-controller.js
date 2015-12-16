var controllers = angular.module('searchApp');

controllers.controller('SearchController', ['$scope', 'ApiService', function($scope, ApiService) {
  $scope.results = [];
  $scope.error = false;
  $scope.placeholder = "Star Wars";

  $scope.search = function(terms) {
    terms = terms || $scope.placeholder;

    ApiService.search(terms).then(function(response) {
      $scope.results = response.data.Search;
    }, function(error) {
      console.log(error);  
    });
  };
}]);
