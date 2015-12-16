var FAVORITE_URL = "/favorites";
var OMDB_URL = "http://www.omdbapi.com/";

$().ready(function() {
  // Hook up the search button to the search function.
  $("#search").click(search);
});

// Searches for the current search terms.
function search() {
  var terms = $("#terms").val() || "Star Wars";
  var params = {s: terms};

  $.get(OMDB_URL, params, function(response) {
    buildSearchTable(response.Search);
  });
}

function buildSearchTable(movies) {
  var oldBody= $("#results tbody");
  var newBody = document.createElement("tbody");

  for (var i = 0; i < movies.length; i++) {
    // create a local variable to make it easy to reference the current movie
    var movie = movies[i];

    // create a new row to put in the table
    var row = document.createElement("tr");

    var year = document.createElement("td");
    $(year).text(movie.Year);

    var title = document.createElement("td");
    var titleLink = titleDetailLink(movie);
    title.appendChild(titleLink);

    // create a cell and put the favorite link in it.
    var favorite = document.createElement("td");
    var favoriteLink = addToFavoritesLink(movie)
    favorite.appendChild(favoriteLink);

    // actually add the cells to the row
    row.appendChild(year);
    row.appendChild(title);
    row.appendChild(favorite);

    // append the complete row to the table body
    newBody.appendChild(row);
  }

  oldBody.replaceWith(newBody);
}
