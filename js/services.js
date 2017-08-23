/*jslint node: true */
/*global angular */

'use strict';

var myServices = angular.module('myServices', []);

myServices.factory('cartSrv', ['store', function (store) {
    var cart;

    if (store.get('cart')) {
        cart = store.get('cart');
    } else {
        cart = [];
    }

    cart.show = function () {
        return cart;
    };

    cart.add = function (product) {

        //        if (!cart.length) {
        //            product.qty = 0;
        //            cart.push(product);
        //        }

        var addNew = true;

        angular.forEach(cart, function (value, key) {
            if (value.name === product.name) {
                addNew = false;
                cart[key].qty = cart[key].qty + 1;
            }
        });

        if (addNew) {

            product.qty = 1;
            cart.push(product);

        }
        store.set(cart);
    };

    cart.empty = function () {
        store.remove('cart');
        cart.length = 0;
    };

    cart.update = function (newCart) {
        store.set('cart', newCart);
    };

    return cart;
}]);
