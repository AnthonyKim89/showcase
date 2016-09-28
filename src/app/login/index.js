'use strict';

module.exports = require('angular')
    .module('bookbottles.showcase.login', [
        require('angular-ui-router')
    ])
    .config(require('./route'))
    .controller('LoginCtrl', require('./controllers/LoginCtrl'))
    .name;
