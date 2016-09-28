'use strict';

module.exports = auth;

/**
 * @ngInject
 */
function auth($rootScope, $state, UserService) {
    // Redirect to login if route requires auth and the user is not logged in, or doesn't have required role
    $rootScope.$on('$stateChangeStart', function(event, next) {
        if (!next.authenticate) {
            return;
        }

        UserService.isLoggedIn()
            .then(function(is) {
                if (is) {
                    return;
                }

                event.preventDefault();
                $state.go('login');
            });
    });
}
