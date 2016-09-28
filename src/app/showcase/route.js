'use strict';

module.exports = route;

/**
 * @ngInject
 */
function route($stateProvider) {
    // Configure states here
    $stateProvider
        .state('dashboard', {
            url: '/',
            template: require('./templates/dashboard.tpl.jade'),
            controller: 'DashboardCtrl as vm',
            authenticate: true
        });
}
