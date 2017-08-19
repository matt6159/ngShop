/*jslint node: true */
/*global angular */

'use strict';

var myCtrlsAdmin = angular.module('myCtrlsAdmin', []);

myCtrlsAdmin.controller('items', ['$scope', '$http', function ($scope, $http) {

    //    console.log();
    /* też jest ok
        $http({
            method: 'GET',
            url: 'model/produkty.json'
        }).
    */

    $http.get('model/products.json').then(function success(response) {
        //var data = response.data;
        $scope.products = response.data;

    }).then(function error(response) {
        console.log('Błąd pobrania pliku json');
    });

    $scope.deleteItem = function (product, $index) {

        // TODO: przesłać dane do api
        $scope.products.splice($index, 1);
        //  console.log( $scope.products[$index]);
    };

}]);

myCtrlsAdmin.controller('itemEdit', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {

    $http.get('model/products.json').then(function success(response) {
        // var data = response.data;
        //  var products = data;
        var products = response.data;


        $scope.product = products[$routeParams.id];
    }).then(function error(response) {
        console.log('Błąd pobrania pliku json');
    });

    $scope.saveChanges = function (product) {

        // TODO: przesłać dane do api
        console.log(product);

    };

}]);

myCtrlsAdmin.controller('itemCreate', ['$scope', '$http', function ($scope, $http) {

    // TODO: przesłać dane do api

    $scope.createProduct = function () {
        console.log($scope.product);
    };

}]);

myCtrlsAdmin.controller('users', ['$scope', '$http', function ($scope, $http) {

    $http.get('model/users.json').then(function success(response) {
        var data = response.data;
        $scope.users = data;

    }).then(function error(response) {
        console.log('Błąd pobrania pliku json');
    });

    $scope.deleteUser = function (user, $index) {

        // TODO: przesłać dane do api
        $scope.users.splice($index, 1);
        //  console.log( $scope.products[$index]);
    };

}]);

myCtrlsAdmin.controller('userEdit', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {

    $http.get('model/users.json').then(function success(response) {

        var users = response.data;

        $scope.user = users[$routeParams.id];
    }).then(function error(response) {
        console.log('Błąd pobrania pliku json');
    });

    $scope.saveChanges = function (user) {

        // TODO: przesłać dane do api
        console.log(user);

    };

}]);

myCtrlsAdmin.controller('userCreate', ['$scope', '$http', function ($scope, $http) {

    // TODO: przesłać dane do api

    $scope.createUser = function () {
        console.log($scope.user);
    };

}]);

myCtrlsAdmin.controller('orders', ['$scope', '$http', function ($scope, $http) {

    $http.get('model/orders.json').then(function success(response) {
        var data = response.data;
        $scope.orders = data;

    }).then(function error(response) {
        console.log('Błąd pobrania pliku json');
    });

    $scope.deleteOrder = function (order, $index) {

        // TODO: przesłać dane do api
        $scope.orders.splice($index, 1);
        //  console.log( $scope.products[$index]);
    };

    $scope.changeStatus = function (order, $index) {

        // TODO: przesłać dane do api
        if (order.status === 0) {
            console.log(order.status);
            order.status = 1;
        } else {
            order.status = 0;
        }
        //  console.log( $scope.products[$index]);
    };

}]);