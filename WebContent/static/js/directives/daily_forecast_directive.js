/**
 * 
 */
'use strict';
 
angular.module('myApp').directive('dailyForecast', function() {
	return {
		restrict: 'E',
		templateUrl: '/static/js/directives/dailyForecast.html',
		scope: {forecast: "="} // two way binding for forecast
	};
});

