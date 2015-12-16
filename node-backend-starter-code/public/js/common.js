/*
These helper functions were derived from documentation at:
https://developer.mozilla.org/en-US/docs/AJAX/Getting_Started
*/

function HttpGetJson(url, params, cb) {
  return HttpJsonRequest("GET", url, params, cb);
}

function HttpPostJson(url, params, cb) {
  return HttpJsonRequest("POST", url, params, cb);
}

function HttpJsonRequest(method, url, params, cb) {
  var httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = HttpResponse;

  if (method === "GET") {
    var encodedUrl = encode(url, params);
    httpRequest.open(method, encodedUrl, true);
    httpRequest.send(null);
  } else if (method === "POST") {
    httpRequest.setRequestHeader('Content-Type', 'application/json');
    httpRequest.open(method, url, true);
    httpRequest.send(params);
  }

  function HttpResponse(response) {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        // parse the server response as JSON
        var json = JSON.parse(httpRequest.responseText);

        // Call the callback and pass the JSON to it.
        cb(json);
      } else {
        // There was an error. Construct an error object.
        var errorJson = {
          Response: "False",
          Error: "The network request failed. Try again."
        };

        // Send the error JSON back to the callback function.
        cb(errorJson);
      }
    }
  }
}

function encode(url, params) {
  var encodedUrl = url + "?";
  for (var key in params) {
    encodedUrl += encodeURI(key) + "=";
    encodedUrl += encodeURI(params[key]);
    encodedUrl += "&";
  }
  return encodedUrl;
}


function addToFavoritesLink(movie, text) {
  var link = document.createElement("a");
  link.href="#" + movie.imdbID;
  link.text = text || "Add";

  link.onclick = function() {
    addFavorite(movie);
  };

  return link;
}

function titleDetailLink(movie) {
  var link = document.createElement("a");
  link.href = "details.html?id=" + movie.imdbID;
  link.text = movie.Title;

  return link;
}

function addFavorite(movie) {
  var params = {
    name: movie.Title,
    oid: movie.imdbID
  };

  $.post(FAVORITE_URL, params);
}
