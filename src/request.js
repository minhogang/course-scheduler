const fetch = require('node-fetch');

fetch('http://127.0.0.1:8000/terms/?format=json')
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.log(err));