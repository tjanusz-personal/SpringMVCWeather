/**
 * 
 */
'use strict';
 
angular.module('myApp').controller('ForecastController', ['$scope', 'ForecastService', '$filter', function($scope, ForecastService, $filter) {
    var self = this;
    self.forecastResponse = {longitude:null, latitude:null, currently:null, daily:null};
    self.submit = submit;
    self.searchAddress = "Philadelphia,PA";
    self.errorMessage = null;
    // force city,state
    $scope.cityStateRE = /^[A-Za-z]+,[ ]?[A-Za-z][A-Za-z]$/;

    function submit() {
    	if (self.searchAddress) {
    		fetchForecastForLocation();
    	}
    }

    function fetchForecastForLocation(){
    	ForecastService.fetchForecastForLocation(self.searchAddress)
            .then(
            function(d) {
                self.forecastResponse = d;
                self.errorMessage = null;
            },
            function(errResponse){
                self.errorMessage = errResponse;
            }
        );
    }
    
}]);