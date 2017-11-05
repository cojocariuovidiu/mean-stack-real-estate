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
   
})