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
  // Create default empty params and empty callback if none are provided.
  params = params || {};
  cb = cb || function() {};

  var httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = HttpResponse;

  if (method === "GET") {
    var encodedUrl = encode(url, params);
    httpRequest.open(method, encodedUrl, true);
    httpRequest.send(null);
  } else if (method === "POST") {
    httpRequest.open(method, url, true);

    // Tell the server it should expect JSON
    httpRequest.setRequestHeader('Content-Type', 'application/json');

    // encode the params as JSON
    params = JSON.stringify(params);

    // send along the JSON-encoded params
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

