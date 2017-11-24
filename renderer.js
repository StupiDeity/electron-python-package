// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
function getData() {
    var request = require("request");
    
    var options = { method: 'POST',
      url: 'http://127.0.0.1:5000/matrix/multiply',
      headers: { 'content-type': 'application/json' },
      body: { arr1: [ [ 1, 2 ], [ 3, 4 ] ], arr2: [ [ 5, 6 ], [ 7, 8 ] ] },
      json: true };
    
    request(options, function (error, response, body) {
      if (error) throw new Error(error);
    
      console.log(body);
      document.querySelector('#results').insertAdjacentHTML('beforeend',"<pre>"+body+"</pre>")
    });
    
}

document.querySelector('#btnEd').addEventListener('click', getData)