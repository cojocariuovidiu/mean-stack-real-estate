myApp.controller('RentalController', function(RealtyService) {
    console.log('Rental controller created');
   
    var rental = this;
   
    RealtyService.getRentals();
    rental.rentals = RealtyService.rentals; 
   
    rental.deleteRental = function(rentalId) {
        RealtyService.deleteRental(rentalId);
        console.log('delete');
    }
    

    
})