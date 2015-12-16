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

  // Hide all previous errors or search results.
  hideErrors();
  clearSearchResults();

  HttpGetJson(OMDB_URL, params, function(response) {
    if (response.Response === "False") {
      showError(response.Error);
    } else {
      buildSearchTable(response.Search);
    }
  });
}

// Hides the div containing error messages.
function hideErrors() {
  var error = document.getElementById("error");
  error.style.visibility = "hidden";
}

// Displays the given error text.
function showError(errorText) {
  var errorDiv = document.getElementById("error");
  errorDiv.textContent = errorText;
  errorDiv.style.visibility = "visible";
}

// Hides the table containing search results.
function clearSearchResults() {
  var table = document.getElementById("results");
  var oldBody = table.getElementsByTagName("tbody")[0];

  // Prevent the table from removing it's body if it's body
  // has already been removed from a previous empty search or error.
  if (oldBody) {
    table.removeChild(oldBody);
    table.style.visibility = "hidden";
  }
}

// Populates the search results table.
function buildSearchTable(movies) {
  var table = document.getElementById("results");
  var newBody = document.createElement("tbody");

  for (var i = 0; i < movies.length; i++) {
    // Create a local variable to make it easy to reference the current movie.
    var movie = movies[i];

    // Create a new row to put in the table.
    var row = document.createElement("tr");

    var year = document.createElement("td");
    year.textContent = movie.Year;

    var title = document.createElement("td");
    var titleLink = titleDetailLink(movie);
    title.appendChild(titleLink);

    // Create a cell and put the favorite link in it.
    var favorite = document.createElement("td");
    var favoriteLink = addToFavoritesLink(movie)
    favorite.appendChild(favoriteLink);

    // Actually add the cells to the row.
    row.appendChild(year);
    row.appendChild(title);
    row.appendChild(favorite);

    // Append the complete row to the table body.
    newBody.appendChild(row);
  }

  // Insert the new table body into the table and show the results.
  table.appendChild(newBody);
  table.style.visibility = "visible";
}
