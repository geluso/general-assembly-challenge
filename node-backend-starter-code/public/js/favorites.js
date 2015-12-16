var FAVORITE_URL = "/favorites";

var favorites = [];

$().ready(function() {
  // Initialize the favorites table.
  $.get(FAVORITE_URL, buildFavoritesTable);
});

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

    // actually add the cells to the row
    row.appendChild(title);

    // append the complete row to the table body
    body.appendChild(row);
  }

  oldBody.replaceWith(body);
}
