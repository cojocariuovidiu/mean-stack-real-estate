myApp.controller('RentalController', function(RealtyService) {
    console.log('Rental controller created');
   
    var rental = this;
   
    RealtyService.getRentals();
    rental.rentals = RealtyService.rentals; 
   
    console.log('rentals in controller', rental.rentals);

    
})