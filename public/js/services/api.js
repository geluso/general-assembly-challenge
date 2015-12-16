var services = angular.module('searchApp');
services.factory('ApiService', ['$http', function($http) {
  var FAVORITE_URL = "/favorites";
  var OMDB_URL = "https://www.omdbapi.com/";

  var api = {};

  api.search = function(terms) {
    var params = {s: terms};
    return $http.get(OMDB_URL, {params: params});
  };

  api.addFavorite = function(name, oid) {
    var data = {
      name: name,
      oid: oid
    };
    return $http.post(FAVORITE_URL, data);
  };

  api.getFavorites = function() {
    return $http.get(FAVORITE_URL);
  };

  api.getDetails = function(id) {
    var params = {
      i: id,
      plot: "full",
      tomatoes: true
    };
    return $http.get(OMDB_URL, {params: params});
  };

  return api;
}]);
