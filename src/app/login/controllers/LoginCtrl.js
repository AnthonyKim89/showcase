'use strict';

module.exports = LoginCtrl;

/**
 * @ngInject
 */
function LoginCtrl($state, UserService) {
    var vm = this;

    vm.login = function(form) {
        vm.submitted = true;

        if (form.$valid) {
            UserService.login({
                    name: vm.user.name,
                    password: vm.user.password
                })
                .then(function(){
                    // Account validated, redirect to dashboard
                    $state.go('dashboard');
                })
                .catch(function(err){
                    vm.errors = {};

                    vm.errors.other = err.message;
                });
        }
    };
}
