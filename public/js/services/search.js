var services = angular.module('searchApp');
services.factory('SearchService', ['$http', function($http) {
  var search = {};

  search.search = function(terms) {
    var params = {s: terms};
    return $http.get(OMDB_URL, {params: params});
  };

  search.favorites = function() {
    return $http.get(FAVORITE_URL);
  };

  return search;
}]);
