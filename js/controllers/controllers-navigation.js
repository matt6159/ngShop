/*jslint node: true */
/*global angular, store */

'use strict';

var myCtrlsNavigation = angular.module('myCtrlsNavigation', []);

myCtrlsNavigation.controller('navigation', ['$scope', '$location', 'store', function ($scope, $location, store) {

    $scope.navigation = function () {
        if (/^\/admin/.test($location.path())) {
            return 'partials/admin/navigation.html';
        } else {
            return 'partials/site/navigation.html';
        }
    };


    $scope.isActive = function (path) {
        return $location.path() === path;
    };

    
    store.set('test', 'lalaok');
}]);


