const fetch = require('node-fetch');
fetch('data.json')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));


import('node-fetch')
    .then(fetch => fetch('data.json'))
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));


const request = new XMLHttpRequest();
request.open('GET', 'data.json');
request.responseType = 'json';
request.onload = function() {
  const data = request.response;
  console.log(data);
}
request.send();

