myApp.controller('ListingController', function(RealtyService) {
    console.log('listing controller created');

    var listing = this;
    RealtyService.getListings();
    listing.listings = RealtyService.listings; 
    console.log('listings array in controller', listing.listings);

    

})