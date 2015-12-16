var services = angular.module('searchApp');
services.factory('ApiService', ['$http', '$q', function($http, $q) {
  var FAVORITE_URL = "/favorites";
  var OMDB_URL = "https://www.omdbapi.com/";

  var api = {};

  api.search = function(terms) {
    var params = {s: terms};

    var deferred = $q.defer();

    $http.get(OMDB_URL, {params: params}).then(function(response) {
      // Return the proper error message if there is a problem.
      if (response.data.Response === "False") {
        deferred.reject(response.data.Error);
      // Otherwise, return the search results.
      } else {
        deferred.resolve(response.data.Search);
      }
    }, function(response) {
      var errorText = 'HTTP ' + response.status + ' error. Try again.';
      deferred.reject(errorText);
    });

    return deferred.promise;
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
