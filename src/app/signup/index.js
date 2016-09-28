'use strict';

module.exports = require('angular')
    .module('bookbottles.showcase.signup', [
        require('angular-ui-router'),
        require('angular-validation-match')
    ])
    .config(require('./route'))
    .controller('SignUpCtrl', require('./controllers/SignUpCtrl'))
    .factory('UserService', require('./services/UserService'))
    .name;
