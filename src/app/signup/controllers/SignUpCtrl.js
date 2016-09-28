'use strict';

module.exports = SignUpCtrl;

/**
 * @ngInject
 */
function SignUpCtrl($state, UserService) {
    var vm = this;

    vm.signUp = function(form) {
        vm.submitted = true;

        if (form.$valid) {
            UserService.create({
                    name: vm.user.name,
                    password: vm.user.password
                })
                .then(function(){
                    // Account created, redirect to dashboard
                    $state.go('dashboard');
                })
                .catch(function(err){
                    vm.errors = {};

                    // Update validity of form fields that match the server errors
                    angular.forEach(err.errors, function(error, field) {
                        form[field].$setValidity('server', false);
                        vm.errors[field] = error.message;
                    });
                });
        }
    };
}
