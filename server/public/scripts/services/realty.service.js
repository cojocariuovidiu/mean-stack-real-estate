myApp.service('RealtyService', function($http) {
    console.log('realty service sourced');

    var self = this;
    self.rentals = {data: []};
    self.listings = {data: []};

    self.getRentals = function() {
        $http.get('/rental').then(function(response) {
            console.log('found rentals', response);
            self.rentals.data = response.data;
        }).catch(function(err) {
            console.log('get didn\'t work!', err);
        })
    }

    self.getListings = function() {
        $http.get('/listing').then(function(response) {
            console.log('found listings', response);
            self.listings.data = response.data;
        }).catch(function(err) {
            console.log('get didn\'t work!', err);
        })
    }

})