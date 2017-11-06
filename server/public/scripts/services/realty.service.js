myApp.service('RealtyService', function($http) {
    console.log('realty service sourced');

    var self = this;
    self.rentals = {result: []};
    self.listings = {result: []};

    self.getRentals = function() {
        $http.get('/rental').then(function(response) {
            console.log('found rentals', response.data);
            self.rentals.result = response.data;
            console.log('rental result in service', self.rentals.result);
        }).catch(function(err) {
            console.log('get didn\'t work!', err);
        })
    }

    self.getListings = function() {
        $http.get('/listing').then(function(response) {
            console.log('found listings', response);
            self.listings.result = response.data;
        }).catch(function(err) {
            console.log('get didn\'t work!', err);
        })
    }

    

    self.addListing = function(newListing) {
        console.log('new listing: ', newListing);
        if (newListing.type === "Rent") {
            var rentalToSend = {
                rent: newListing.cost,
                sqft: newListing.sqft,
                city: newListing.city
            }
            console.log('it\'s a rental!');
            $http.post('/rental', rentalToSend).then(function(response) {
                console.log('new rental post', response)
                self.getRentals();
            }).catch(function(err) {
                console.log('rental post didn\'t work!', err);
            })
        } else if (newListing.type === "Cost") {
            console.log('it\'s for sale!');
            $http.post('/listing', newListing).then(function(response) {
                console.log('new listing post', response)
                self.getListings();
            }).catch(function(err) {
                console.log('listing post didn\'t work!', err);
            })
        }
        newListing.cost = '';
        newListing.sqft = '';
        newListing.city = '';
    }

    self.deleteListing = function(listingId) {
        $http.delete('/listing/' + listingId).then(function (response) {
            console.log('Success!');
            self.getListings();
        }).catch(function (error) {
            console.log('Failure!');
        });
    }

    self.deleteRental = function(rentalId) {
        $http.delete('/rental/' + rentalId).then(function (response) {
            console.log('Success!');
            self.getRentals();
        }).catch(function (error) {
            console.log('Failure!');
        });
    }
})

