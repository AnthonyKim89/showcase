'use strict';

require('angular')
    .module('bookbottles.showcase', [
        /* 3rd Party */
        require('angular-ui-router'),
        require('angularfire'),

        /* Custom */
        require('../signup'),
        require('../login')
    ])
    .config(require('./config'))
    .config(require('./route'))
    .run(require('./auth'))
    .controller('DashboardCtrl', require('./controllers/DashboardCtrl'))
    .factory('DataService', require('./services/DataService'))
    .directive('dashboardDirective', require('./directives/DashboardDirective'));