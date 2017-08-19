/*jslint node: true */
/*global angular */

'use strict';

var myCtrlsSite = angular.module('myCtrlsSite', []);

myCtrlsSite.controller('siteProducts', ['$scope', '$http', function ($scope, $http) {

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

myCtrlsSite.controller('siteProduct', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {

    $http.get('model/products.json').then(function success(response) {
        // var data = response.data;
        //  var products = data;
        var products = response.data;
        

        $scope.product = products[$routeParams.id];
    }).then(function error(response) {
        console.log('Błąd pobrania pliku json');
    });


}]);




myCtrlsSite.controller('siteOrders', ['$scope', '$http', function ($scope, $http) {

    $http.get('model/orders.json').then(function success(response) {
        var data = response.data;
        $scope.orders = data;

    }).then(function error(response) {
        console.log('Błąd pobrania pliku json');
    });

    

}]);