myApp.controller('ListingController', function(RealtyService) {
    console.log('listing controller created');

    var listing = this;

    RealtyService.getListings();

    

})