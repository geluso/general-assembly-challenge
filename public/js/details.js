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
    plot: "full",
    tomatoes: true
  };

  HttpGetJson(OMDB_URL, params, function(response) {
    // Populate the page with information returned from OMDB
    document.getElementById("poster").src = response.Poster;

    // Populate important values in their predefined locations.
    document.getElementById("year").textContent = "(" + response.Year + ")";
    document.getElementById("title").textContent = response.Title;

    // Manually add the plot summary as the first detail.
    addDetail("Plot", response.Plot);

    // Create a list of all the properties we've just positioned specifically.
    // This list is a blacklist that prevents us from automatically putting
    // these properties anywhere else on the page.
    var blacklist = ["Poster", "Year", "Title", "Plot"];

    // Iterate through all properties in the response and ignore anything
    // defined in the blacklist. Add everything else to the general detail section.
    for (var key in response) {
      if (blacklist.indexOf(key) == -1) {
        addDetail(key, response[key]);
      }
    }

    // Place a link that will add this movie to the list of favorite movies.
    var favorite = document.getElementById("favorite");
    var favoriteLink = addToFavoritesLink(response, "Add to favorites.");
    favorite.appendChild(favoriteLink);
  });
}

function addDetail(propertyText, valueText) {
  var detailsDiv = document.getElementById("details");

  var property = document.createElement("p");
  property.className = "property";
  property.textContent = propertyText;

  var value = document.createElement("p");
  value.className = "value";
  value.textContent = valueText;

  detailsDiv.appendChild(property);
  detailsDiv.appendChild(value);
}
