/*jslint node: true */
/*global angular */

'use strict';

var app = angular.module('app', ['ngRoute', 'myCtrls']);

app.config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
    
    // ================== Products ====================

    $routeProvider.when('/admin/products', {
        controller: 'items',
        templateUrl: 'partials/admin/products.html'
    });

    $routeProvider.when('/admin/product/edit/:id', {
        controller: 'itemEdit',
        templateUrl: 'partials/admin/product-edit.html'
    });
    
    $routeProvider.when('/admin/product/create', {
        controller: 'itemCreate',
        templateUrl: 'partials/admin/product-create.html'
    });
    
    
    // ================== Users ====================

   
    
    $routeProvider.when('/admin/users', {
        controller: 'users',
        templateUrl: 'partials/admin/users.html'
    });
    
    $routeProvider.when('/admin/user/edit/:id', {
        controller: 'userEdit',
        templateUrl: 'partials/admin/user-edit.html'
    });

    $routeProvider.when('/admin/user/create', {
        controller: 'userCreate',
        templateUrl: 'partials/admin/user-create.html'
    });
    
    // ================== Orders ====================


    $routeProvider.when('/admin/orders', {
        controller: 'orders',
        templateUrl: 'partials/admin/orders.html'
    });
    /* edycja zbędna
    $routeProvider.when('/order/edit/:id', {
        controller: 'orderEdit',
        templateUrl: 'partials/admin/order-edit.html'
    });

    $routeProvider.when('/order/create', {
        controller: 'orderCreate',
        templateUrl: 'partials/admin/order-create.html'
    }); */
    
    $routeProvider.when('/login', {
        controller: 'login',
        templateUrl: 'partials/login.html'
    });
 
    // ================== Default ====================
    $routeProvider.otherwise({
        redirectTo: '/home'
    });
}]);
