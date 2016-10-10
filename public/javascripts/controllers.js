'use strict';

var app = angular.module('widgetApp', []);

app.controller('WidgetController', function($scope, $http) {

    $scope.orderWidget = function() {
        console.log("ordering a widget");
    }

});
