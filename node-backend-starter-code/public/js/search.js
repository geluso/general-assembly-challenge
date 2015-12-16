var FAVORITE_URL = "/favorites";
var OMDB_URL = "http://www.omdbapi.com/";

window.onload = function() {
  // Hook up the search button to the search function.
  var searchButton = document.getElementById("search")
  searchButton.onclick = search;
};

// Searches for the current search terms.
function search() {
  var searchBox = document.getElementById("terms");

  // The user has either entered something, or we run a default search
  // defined by the placeholder value.
  var terms = searchBox.value || searchBox.placeholder;
  var params = {s: terms};

  $.get(OMDB_URL, params, function(response) {
    // TODO: handle this error:
    // {Response: "False", Error: "Movie not found!"}
    buildSearchTable(response.Search);
  });
}

function buildSearchTable(movies) {
  var table = document.getElementById("results");
  var oldBody= table.getElementsByTagName("tbody")[0];
  var newBody = document.createElement("tbody");

  for (var i = 0; i < movies.length; i++) {
    // create a local variable to make it easy to reference the current movie
    var movie = movies[i];

    // create a new row to put in the table
    var row = document.createElement("tr");

    var year = document.createElement("td");
    year.textContent = movie.Year;

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

  table.removeChild(oldBody);
  table.appendChild(newBody);
  table.style.visibility = "visible";
}
