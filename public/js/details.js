window.onload = function() {
  // Get the movie ID from the URL
  var args = document.location.search;
  var id = args.split("id=")[1];

  showDetails(id);
};

function showDetails(id) {
  // Construct the correct params to be sent to OMDB
  var params = {
    i: id,
    plot: "short",
    tomatoes: true
  };

  HttpGetJson(OMDB_URL, params, function(response) {
    // Populate the page with information returned from OMDB
    document.getElementById("poster").src = response.Poster;

    document.getElementById("year").textContent = "(" + response.Year + ")";
    document.getElementById("title").textContent = response.Title;
    document.getElementById("summary").textContent = response.Plot;

    // Place a link that will add this movie to the list of favorite movies.
    var favorite = document.getElementById("favorite");
    var favoriteLink = addToFavoritesLink(response, "Add to favorites.");
    favorite.appendChild(favoriteLink);
  });
}
