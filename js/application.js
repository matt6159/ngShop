/*jslint node: true */
/*global angular */

'use strict';

var app = angular.module('app', ['ngRoute', 'myCtrls']);

app.config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
    
    // ================== Products ====================

    $routeProvider.when('/products', {
        controller: 'items',
        templateUrl: 'partials/products.html'
    });

    $routeProvider.when('/product/edit/:id', {
        controller: 'itemEdit',
        templateUrl: 'partials/product-edit.html'
    });
    
    $routeProvider.when('/product/create', {
        controller: 'itemCreate',
        templateUrl: 'partials/product-create.html'
    });
    
    
    // ================== Users ====================

    $routeProvider.when('/login', {
        controller: 'login',
        templateUrl: 'partials/login.html'
    });
    
    $routeProvider.when('/users', {
        controller: 'users',
        templateUrl: 'partials/users.html'
    });
    
    $routeProvider.when('/user/edit/:id', {
        controller: 'userEdit',
        templateUrl: 'partials/user-edit.html'
    });

    $routeProvider.when('/user/create', {
        controller: 'userCreate',
        templateUrl: 'partials/user-create.html'
    });
 
    // ================== Default ====================
    $routeProvider.otherwise({
        redirectTo: '/home'
    });
}]);
