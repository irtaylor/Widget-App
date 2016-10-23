'use strict';

// SET UP ALL THE ROUTING NECESSARY FOR PROPERLY DISPLAYING VIEWS 

var app = angular.module('widgetApp', ['ngRoute']);

app.config(['$routeProvider',
function (
    $routeProvider
) {
    $routeProvider.
    when('/', {
        templateUrl: '../views/order.html',
        controller: 'WidgetController'
    })
    .otherwise({
        redirectTo: '/'
    });
}]);
