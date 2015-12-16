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

function addFavorite(movie) {
  var params = {
    name: movie.Title,
    oid: movie.imdbID
  };

  $.post(FAVORITE_URL, params);
}

function buildFavoriteLink(movie) {
  var link = document.createElement("a");
  link.href="#" + movie.imdbID;
  link.text = "Add";

  $(link).click(function() {
    addFavorite(movie);
  });

  return link;
}

function buildSearchTable(movies) {
  buildTable("#results tbody", movies);
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

    $(title).click(function() {
      showDetails(movie);
    });

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

function showDetails(movie) {
  console.log("getting details for", movie);

  // hide the details until all of the new information comes in.
  $("#details").hide();

  document.getElementById("poster").src = movie.Poster;
  $("#title").text(movie.Title);
  $("#year").text(movie.Year);

  var params = {
    i: movie.imdbID,
    plot: "short",
    tomatoes: true
  };

  $.get(OMDB_URL, params, function(response) {
    console.log("details", response);

    // update the summary and show all the details.
    $("#summary").text(response.Plot)
    $("#details").show();
  });
}
