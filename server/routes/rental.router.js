var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var rentalSchema = new Schema({rent: Number, sqft: Number, city: String, _v: Number});
var Rental = mongoose.model('Rental', rentalSchema, 'rentals');

//GET route
router.get('/', function(req, res) {
    Rental.find({}, function(err, foundRentals) {
        if (err) {
            console.log('Error: ', err);
            res.sendStatus(500);
        } else {
            res.send(foundRentals);
            console.log('get route worked');
            }
        }); //end FIND
}); //end GET route


module.exports = router; 