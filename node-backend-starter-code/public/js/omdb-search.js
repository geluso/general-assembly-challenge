var FAVORITE_URL = "/favorites";
var OMDB_URL = "http://www.omdbapi.com/";

var favorites = [];

$().ready(function() {
  // Hook up the search button to the search function.
  $("#search").click(search);

  // Initialize the favorites table.
  $.get(FAVORITE_URL, buildFavoritesTable);
});

// Searches for the current search terms.
function search() {
  var terms = $("#terms").val() || "Star Wars";
  var params = {s: terms};

  $.get(OMDB_URL, params, function(response) {
    buildSearchTable(response.Search);
  });
}

function addFavorite(movie) {
  var params = {
    name: movie.Title,
    oid: movie.imdbID
  };

  $.post(FAVORITE_URL, params, buildFavorites);
}

function buildFavoriteLink(movie) {
  var link = document.createElement("a");
  link.href="#";

  // is this movie already in our favorites?
  if (favorites.indexOf(movie.imdbID) >= 0) {
    link.text = "Remove";
  } else {
    link.text = "Add";
  }

  $(link).click(function() {
    addFavorite(movie);
  });

  return link;
}

function buildSearchTable(movies) {
  buildTable("#results tbody", movies);
}

function buildFavoritesTable(movies) {
  buildTable("#favorites tbody", movies);
}

function buildTable(table, movies) {
  var oldBody= $(table);
  var body = document.createElement("tbody");

  for (var i = 0; i < movies.length; i++) {
    // create a local variable to make it easy to reference the current movie
    var movie = movies[i];

    // create a new row to put in the table
    var row = document.createElement("tr");

    var title = document.createElement("td");
    $(title).text(movie.Title || movie.name)

    // create a cell and put the favorite link in it.
    var favorite = document.createElement("td");
    var link = buildFavoriteLink(movie);
    favorite.appendChild(link);

    // actually add the cells to the row
    row.appendChild(title);
    row.appendChild(favorite);

    // append the complete row to the table body
    body.appendChild(row);
  }

  oldBody.replaceWith(body);
}
