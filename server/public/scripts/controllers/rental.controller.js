myApp.controller('RentalController', function(RealtyService) {
    console.log('Rental controller created');
    RealtyService.getRentals();
    var rental = this;
    var rentals = RealtyService.rentals; 
    console.log('rentals in controller', rentals);
    console.log('service rentals in controller: ', RealtyService.rentals.data);

    
})