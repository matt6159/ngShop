/*jslint node: true */
/*global angular */

'use strict';

var myCtrlsNavigation = angular.module('myCtrlsNavigation', []);

myCtrlsNavigation.controller('navigation', ['$scope', '$location', 'cartSrv', function ($scope, $location, cartSrv) {

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

    

}]);


