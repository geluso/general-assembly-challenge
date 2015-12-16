var FAVORITE_URL = "/favorites";
var OMDB_URL = "https://www.omdbapi.com/";

// Creates an anchor element that iwll navigate to the detail
// page for the given movie.
function titleDetailLink(movie) {
  var link = document.createElement("a");
  link.href = "details.html?id=" + movie.imdbID;
  link.text = movie.Title;

  return link;
}

// Creates an anchor element that will add the given movie
// as a favorite when the link is clicked on.
function addToFavoritesLink(movie, text) {
  var link = document.createElement("a");
  link.href="#" + movie.imdbID;
  link.text = text || "Add";

  link.onclick = function() {
    addFavorite(movie);
  };

  return link;
}

// Initiates a network request that adds the given movie
// to the list of favorite movies.
function addFavorite(movie) {
  var params = {
    name: movie.Title,
    oid: movie.imdbID
  };

  HttpPostJson(FAVORITE_URL, params);
}

