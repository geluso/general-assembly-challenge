var FAVORITE_URL = "/favorites";
var OMDB_URL = "http://www.omdbapi.com/";

window.onload = function() {
  var args = document.location.search;
  var id = args.split("id=")[1];

  showDetails(id);
};

function showDetails(id) {
  var params = {
    i: id,
    plot: "short",
    tomatoes: true
  };

  $.get(OMDB_URL, params, function(response) {
    document.getElementById("poster").src = response.Poster;

    document.getElementById("year").textContent = "(" + response.Year + ")";
    document.getElementById("title").textContent = response.Title;
    document.getElementById("summary").textContent = response.Plot;

    var favorite = document.getElementById("favorite");
    var favoriteLink = addToFavoritesLink(response, "Add to favorites.");
    favorite.appendChild(favoriteLink);
  });
}
