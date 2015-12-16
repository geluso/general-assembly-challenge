function encode(url, params) {
  var encodedUrl = url + "?";
  for (var key in params) {
    encodedUrl += encodeURI(key) + "=";
    encodedUrl += encodeURI(params[key]);
    encodedUrl += "&";
  }
  return encodedUrl;
}


function addToFavoritesLink(movie, text) {
  var link = document.createElement("a");
  link.href="#" + movie.imdbID;
  link.text = text || "Add";

  link.onclick = function() {
    addFavorite(movie);
  };

  return link;
}

function titleDetailLink(movie) {
  var link = document.createElement("a");
  link.href = "details.html?id=" + movie.imdbID;
  link.text = movie.Title;

  return link;
}

function addFavorite(movie) {
  var params = {
    name: movie.Title,
    oid: movie.imdbID
  };

  HttpPostJson(FAVORITE_URL, params);
}

