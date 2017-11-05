var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 5000;

//app.use
app.use(bodyParser.json());
app.use(express.static('server/public'));

//spin up server
app.listen(port, function() {
    console.log('listening on port', port);
})

//mongoose
var mongoose = require('mongoose');
// 27017 is the default mongo port number
var databaseUrl = 'mongodb://localhost:27017/';

mongoose.connection.on('connected', function() {
    console.log('mongoose is connected!');
});

mongoose.connection.on('error', function() {
    console.log('mongoose connection failed');
});
mongoose.connect(databaseUrl);
// Eventually, the mongoose code should be in a module

