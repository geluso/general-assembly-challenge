var FAVORITE_URL = "/favorites";
var OMDB_URL = "http://www.omdbapi.com/";

$().ready(function() {
  var args = document.location.search;
  var id = args.split("id=")[1];

  showDetails(id);
});

function showDetails(id) {
  var params = {
    i: id,
    plot: "short",
    tomatoes: true
  };

  $.get(OMDB_URL, params, function(response) {
    console.log("details", response);

    document.getElementById("poster").src = response.Poster;
    $("#year").text("(" + response.Year + ")");
    $("#title").text(response.Title);
    $("#summary").text(response.Plot)

    buildFavoriteLink(response);
  });
}

function buildFavoriteLink(movie) {
  var link = document.getElementById("favorite");
  link.href = "#" + movie.imdbID;
  $(link).click(function() {
    addFavorite(movie);
  });
}

function addFavorite(movie) {
  var params = {
    name: movie.Title,
    oid: movie.imdbID
  };

  $.post(FAVORITE_URL, params);
}

