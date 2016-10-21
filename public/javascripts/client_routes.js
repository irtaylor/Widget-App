'use strict';

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
