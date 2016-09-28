'use strict';

var firebase = require('firebase');
var app = firebase.initializeApp({
    apiKey: "AIzaSyA_qscbJY_eCHsYDgYyd8adwk4U4b1MEs8",
    authDomain: "blockchaser-pulse-af7c6.firebaseapp.com",
    databaseURL: "https://blockchaser-pulse-af7c6.firebaseio.com",
    storageBucket: "blockchaser-pulse-af7c6.appspot.com",
    messagingSenderId: "729699690939"
});

module.exports = DataService;

/**
 * @ngInject
 */
function DataService($q, $firebaseArray) {
    var DataService = {
        fetchData: fetchData
    };

    return DataService;

    //////////

    function fetchData(scope) {
        var ref = app.database().ref('lot_index_test').orderByChild('high_bid');

        ref.on('value', function(item){
            scope.$emit('DATA_LOADED', item.val());
        })
    }
}
