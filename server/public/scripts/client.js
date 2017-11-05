console.log('script sourced');

var myApp = angular.module('myApp', ['ngRoute']);

//configure client-side routes for templates
myApp.config(function($routeProvider) {
    $routeProvider.when('/rental', {
        templateUrl: 'templates/rental.html',
        controller: 'RentalController as rental'
    }).when('/sale', {
        templateUrl: 'templates/sale.html',
        controller: 'SaleController as sale'
    })
})