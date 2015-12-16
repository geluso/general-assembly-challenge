window.onload = function() {
  // Initialize the favorites table.
  HttpGetJson(FAVORITE_URL, {}, buildFavoritesTable);
};

function buildFavoritesTable(movies) {
  buildTable("#favorites tbody", movies);
}

function buildTable(table, movies) {
  var table = document.getElementById("favorites");
  var oldBody = table.getElementsByTagName("tbody")[0];
  var newBody = document.createElement("tbody");

  for (var i = 0; i < movies.length; i++) {
    // Create a local variable to make it easy to reference the current movie.
    var movie = movies[i];

    // Create a new row to put in the table.
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

    // Add a link to the movies detail page.
    var title = document.createElement("td");
    var titleLink = titleDetailLink(omdbMovie);
    title.appendChild(titleLink);

    // Add the cell to the row.
    row.appendChild(title);

    // Append the row to the table body.
    newBody.appendChild(row);
  }

  // Replace the old body with the new body.
  table.removeChild(oldBody);
  table.appendChild(newBody);
}
