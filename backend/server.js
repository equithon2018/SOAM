var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// import URL routes
var companies = require('./routes/companies');


// remove the following middleware in the production version
app.use(function (request, response, next) {
    response.setHeader('Access-Control-Allow-Origin', 'https://hexagon-meganhasegawa.c9users.io:8080');
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    response.header('Access-Control-Allow-Methods', 'POST, PATCH, GET, PUT, DELETE, OPTIONS');
    next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// use Express to handle routes
app.use('/companies', companies);

// Start server on port 8081
// It is important to start Node on a different port
var port = 8081;


app.listen(port);
console.log('Server is running on port ' + port)
