function addToFavoritesLink(movie, text) {
  var link = document.createElement("a");
  link.href="#" + movie.imdbID;
  link.text = text || "Add";

  $(link).click(function() {
    addFavorite(movie);
  });

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

  $.post(FAVORITE_URL, params);
}

