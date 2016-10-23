'use strict';

var app = angular.module('widgetApp'); // personal note: look in client_routes.js. there, we define the widgetApp module w/ its dependencies. here, we do not include the dependencies, so as to not override 

app.controller('WidgetController', function($scope, $http) {

    // finalWidget is the JSON data for the widget being ordered. it will have a format as seen in widget.js (excluding the order_id, which is generated when the order is received).
    // each input field uses the ngModel directive to bind the input to the finalWidget variable.
    $scope.finalWidget = {};


    // DEFINE THE MINIMUM DATE ALLOWED ALLOWED
    $scope.minDate = new Date();
    $scope.minDate.setDate($scope.minDate.getDate()+7); // add seven days to the current date (i.e. one week from today)



    // DEFINE SELECTABLE OPTIONS FOR DROPDOWNS
    $scope.selectable_options = {
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

    // ORDER WIDGET: POSTS AN ORDER TO THE SERVER
    $scope.orderWidget = function(valid) {
        if(valid){  // $valid is passed by the form. it is true if the form data is valid, false if there's an error.
            console.log($scope.finalWidget);

            // $http is AngularJS's extremeley convenient method for AJAX requests to server.
            $http.post('/widgets', $scope.finalWidget)
			.success(function(data) {
                $scope.finalWidget = data;
				console.log(data);

                $scope.finalWidget = {}; // clear the form so our user is ready to enter another
                $scope.output = angular.fromJson(data); // parse the response for the confirmation message

			})
			.error(function(data) {
				console.log('Error: ' + data);
			});

        }
        else {
            console.log("invalid fields!");
        }

    };

    // clear out the order variable, allowing the user to place a new order.
    $scope.newOrder = function(){
        $scope.output = null;
        console.log("Clearing out old data");
    };

});
