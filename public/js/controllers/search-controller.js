var controllers = angular.module('searchApp');

controllers.controller('SearchController', ['$scope', 'SearchService', function($scope, SearchService) {
  $scope.results = [];
  $scope.error = false;
  $scope.placeholder = "Star Wars";

  $scope.search = function(terms) {
    terms = terms || $scope.placeholder;

    SearchService.search(terms).then(function(response) {
      $scope.results = response.data.Search;
    }, function(error) {
      console.log(error);  
    });
  };
}]);
