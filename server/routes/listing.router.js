var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var listingSchema = new Schema({cost: Number, sqft: Number, city: String, _v: Number});
var Listing = mongoose.model('Listing', listingSchema, 'listings');

//GET route
router.get('/', function(req, res) {
    Listing.find({}, function(err, foundlistings) {
        if (err) {
            console.log('Error: ', err);
            res.sendStatus(500);
        } else {
            res.send(foundlistings);
            console.log('get route worked');
            }
        }); //end FIND
}); //end GET route

//POST route
router.post('/', function(req, res) {
    var listingToAdd = new Listing(req.body);
    console.log('listing posted', listingToAdd);
    listingToAdd.save(function(err, data){
        if(err) {
            console.log(err);
            res.sendStatus(500)
        } else {
            res.sendStatus(201);
        }
    })
})

module.exports = router;