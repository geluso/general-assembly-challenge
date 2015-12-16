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


    // Our own database stores movies differently than OMDB.
    // We must create a new movie object in the format that our
    // common functions can interact with uniformly.
    // 
    // Look at common.js:titleDetailLink to see what it expects.
    var omdbMovie = {
      Title: movie.name,
      imdbID: movie.oid
    };

    // Create the link to the movies detail page.
    var title = document.createElement("td");
    var titleLink = titleDetailLink(omdbMovie);
    title.appendChild(titleLink);

    // actually add the cells to the row
    row.appendChild(title);

    // append the complete row to the table body
    body.appendChild(row);
  }

  // Replace the old body with the new body.
  oldBody.replaceWith(body);
}
