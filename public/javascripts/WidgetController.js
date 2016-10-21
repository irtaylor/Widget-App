'use strict';

var app = angular.module('widgetApp');

app.controller('WidgetController', function($scope, $http) {

    $scope.finalWidget = {};


    // DEFINE THE MINIMUM DATE ALLOWED
    $scope.minDate = new Date();
    $scope.minDate.setDate($scope.minDate.getDate()+7);

    // DEFINE SELECTABLE OPTIONS
    $scope.data = {
        widgetModels: [
            {model: 'Widget'},
            {model: 'Widget Pro'},
            {model: 'Widget Xtreme'}
        ],
        widgetColors: [
            {color: 'Red'},
            {color: 'Blue'},
            {color: 'Yellow'}
        ]
    };

    // ORDER WIDGET POSTS AN ORDER TO THE SERVER
    $scope.orderWidget = function(valid) {
        if(valid){
            console.log($scope.finalWidget);

            $http.post('/widgets', $scope.finalWidget)
			.success(function(data) {
                $scope.finalWidget = data;
				console.log(data);

				$scope.finalWidget = {}; // clear the form so our user is ready to enter another

                $scope.output = angular.fromJson(data);

			})
			.error(function(data) {
				console.log('Error: ' + data);
			});

        }
        else {
            console.log("invalid fields!");
        }

    };

});
