'use strict';

module.exports = DashboardDirective;

/**
 * @ngInject
 */
function DashboardDirective() {
    return {
        template: require('./DashboardDirective.tpl.jade'),
        restrict: 'E',
        scope: {
            data: '='
        },
        controller: function(){
        },
        controllerAs: 'ctrl',
        bindToController: true
    };
}
