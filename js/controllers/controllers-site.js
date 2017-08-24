/*jslint node: true */
/*global angular, $, jQuery, alert */

'use strict';

var myCtrlsSite = angular.module('myCtrlsSite', []);

myCtrlsSite.controller('siteProducts', ['$scope', '$http', 'cartSrv', function ($scope, $http, cartSrv) {

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

    $scope.addToCart = function (product) {
        cartSrv.add(product);
    };

}]);

myCtrlsSite.controller('siteProduct', ['$scope', '$http', '$routeParams', 'cartSrv', function ($scope, $http, $routeParams, cartSrv) {

    $http.get('model/products.json').then(function success(response) {
        // var data = response.data;
        //  var products = data;
        var products = response.data;


        $scope.product = products[$routeParams.id];
    }).then(function error(response) {
        console.log('Błąd pobrania pliku json');
    });

    $scope.addToCart = function (product) {
        cartSrv.add(product);
    };


}]);


myCtrlsSite.controller('siteOrders', ['$scope', '$http', function ($scope, $http) {

    $http.get('model/orders.json').then(function success(response) {
        var data = response.data;
        $scope.orders = data;

    }).then(function error(response) {
        console.log('Błąd pobrania pliku json');
    });



}]);


myCtrlsSite.controller('cartCtrl', ['$scope', '$http', '$filter', 'cartSrv', function ($scope, $http, $filter, cartSrv) {

    $scope.cart = cartSrv.show();

    $scope.emptyCart = function () {
        cartSrv.empty();
    };

    $scope.total = function () {
        var total = 0;
        angular.forEach($scope.cart, function (item) {
            total += item.qty * item.price;
        });
        total = $filter('number')(total, 2);
        return total;
    };

    $scope.removeItem = function ($index) {
        $scope.cart.splice($index, 1);
        cartSrv.update($scope.cart);
    };

    $scope.setOrder = function ($event) {
        // TODO: zapisz zamówienie w bazie
        // TODO: sprawdzić czy użytkownik jest zalogowany
        var loggedId = true;

        if (!loggedId) {
            $scope.alert = {
                type: 'warning',
                msg: 'Zaloguj się, aby złożyć zamówienie.'
            };
            $event.preventDefault();
            return false;
        }

        console.log($scope.total());
        console.log($scope.cart);

        $scope.alert = {
            type: 'success',
            msg: 'Zamówienie złożone. Trwa przekierowywanie do płatności...'
        };
        cartSrv.empty();

        $event.preventDefault();
        $('#paypalForm').submit();
    };

    $scope.$watch(function () {
        cartSrv.update($scope.cart);
    });

}]);
