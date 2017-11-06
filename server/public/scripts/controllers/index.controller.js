myApp.controller('IndexController', function(RealtyService) {
    console.log('index controller created');

    var index = this;

    index.newListing = {type: "Rent"};

    index.addListing = function(newListing) {
        RealtyService.addListing(newListing);
       
    }

    

})