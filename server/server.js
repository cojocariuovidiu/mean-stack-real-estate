var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 5000;
var rental = require('./routes/rental.router.js')
var listing = require('./routes/listing.router.js');
var mongoURI = '';
// process.env.MONGODB_URI will only be defined if you
// are running on Heroku
if(process.env.MONGODB_URI != undefined) {
    // use the string value of the environment variable
    mongoURI = process.env.MONGODB_URI;
} else {
    // use the local database server
    mongoURI = 'mongodb://localhost:27017/realestate';
}


//app.use
app.use(bodyParser.json());
app.use(express.static('server/public'));

//routers
app.use('/rental', rental);
app.use('/listing', listing);

//spin up server
app.listen(port, function() {
    console.log('listening on port', port);
})

//mongoose
var mongoose = require('mongoose');
// 27017 is the default mongo port number

mongoose.connection.on('connected', function() {
    console.log('mongoose is connected!');
});

mongoose.connection.on('error', function() {
    console.log('mongoose connection failed');
});
mongoose.connect(databaseUrl);
// Eventually, the mongoose code should be in a module

