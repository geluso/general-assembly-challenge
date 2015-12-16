var services = angular.module('searchApp');
services.factory('SearchService', ['$http', function($http) {
  var FAVORITE_URL = "/favorites";
  var OMDB_URL = "https://www.omdbapi.com/";

  var search = {};

  search.search = function(terms) {
    var params = {s: terms};
    return $http.get(OMDB_URL, {params: params});
  };

  search.addFavorite = function(name, oid) {
    var data = {
      name: name,
      oid: oid
    };
    return $http.post(FAVORITE_URL, data);
  };

  search.favorites = function() {
    return $http.get(FAVORITE_URL);
  };

  search.getDetails = function(id) {
    var params = {
      i: id,
      plot: "full",
      tomatoes: true
    };
    return $http.get(OMDB_URL, {params: params});
  };

  return search;
}]);
