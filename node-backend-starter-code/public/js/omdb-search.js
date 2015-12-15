var OMDB_URL = "http://www.omdbapi.com/";

$().ready(function() {
  $("#search").click(function(element) {
    var terms = $("#terms").val();
    search(terms);
  });

});


function search(terms) {
  $.get(OMDB_URL, {t: terms}, function(response) {
    console.log(response);
  });
}
