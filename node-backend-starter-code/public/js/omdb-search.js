var OMDB_URL = "http://www.omdbapi.com/";

$().ready(function() {
  $("#search").click(function(element) {
    var terms = $("#terms").val() || "Star Wars";
    search(terms);
  });
});


function search(terms) {
  var oldBody= $("#results tbody");
  var body = document.createElement("tbody");

  $.get(OMDB_URL, {s: terms}, function(response) {
    var results = response.Search;

    for (var i = 0; i < results.length; i++) {
      // create a local variable to make it easy to reference our current result
      var result = results[i];

      // log the current result as a sanity check for now.
      console.log(result.Year, result.Title);

      // create a new row to put in the table
      var row = document.createElement("tr");

      // create the cells to put in each row
      // note: these new elements must be wrapped as jquery objects
      var year = document.createElement("td");
      $(year).text(result.Year);

      var title = document.createElement("td");
      $(title).text(result.Title)

      // actually add the cells to the row
      row.appendChild(year);
      row.appendChild(title);

      // append the complete row to the table body
      body.appendChild(row);
    }

    // replace the entire contents of the old table with the new table
    oldBody.replaceWith(body);
  });

}
