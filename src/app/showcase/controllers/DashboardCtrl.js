'use strict';

module.exports = DashboardCtrl;

/**
 * @ngInject
 */
function DashboardCtrl($state, $scope, DataService) {
    var vm = this;

    vm.data = [];

    DataService.fetchData($scope);

    $scope.$on('DATA_LOADED', function(event, data){
    	$scope.$apply(function(){
    		vm.data = data;
    	});
    });
}
