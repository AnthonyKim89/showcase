'use strict';

module.exports = UserService;

/**
 * @ngInject
 */
function UserService($q) {
    var UserService = {
        create: create,
        login: login,
        isLoggedIn: isLoggedIn
    };

    return UserService;

    //////////

    function create(user) {
        var d = $q.defer();

        //at least one number, one lowercase and one uppercase letter
        //at least 3 characters
        var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{3,}/;
        var error = {};

        console.debug('Creating a user');

        if (re.test(user.password)) {
            localStorage['currentUser'] = user;

            d.resolve();
        } else {
            error.errors = {
                password: {
                    message: 'The password should consist of at least one number, one lowercase and one uppercase characters'
                }
            };
            d.reject(error);
        }

        return d.promise;
    }

    function login(user) {
        var d = $q.defer();

        var error = null;

        console.debug('Validating the user', user);

        if (user.name !== 'bookbottles') {
            error = {
                message: 'The name does not exist.'
            };
        } else if (user.password !== 'showcase') {
            error = {
                message: 'The password is invalid.'
            };
        }

        if (!error) {
            localStorage['currentUser'] = user;

            d.resolve();
        } else {
            d.reject(error);
        }

        return d.promise;
    }

    function isLoggedIn() {
        var d = $q.defer();

        console.debug('Authenticating the user', localStorage['currentUser']);

        if (localStorage['currentUser']) {
            d.resolve(true);
        } else {
            d.resolve(false);
        }

        return d.promise;
    }
}
