const express = require('express');

const app = express();


// I will now make the files in 'public' available to the browser

app.use(express.static('public'));

app.get('/', function (request, response) {
    response.sendFile(__dirname + '/views/home.html');
  });

  app.get('/about', function (request, response) {
    response.sendFile(__dirname + '/views/about.html');
  });

  app.get('/works', function (request, response) {
    response.sendFile(__dirname + '/views/works.html');
  });


app.listen(3000);

