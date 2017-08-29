/*jslint node: true */

/*jslint browser: true*/
/*global angular */

'use strict';

var myDirectives = angular.module('myDirectives', []);


// Angular File Upload module does not include this directive
// Only for example


/**
 * The ng-thumb directive
 * @author: nerv
 * @version: 0.1.2, 2014-01-09
 */
myDirectives.directive('ngThumb', ['$window', function ($window) {
    var helper = {
        support: !!($window.FileReader && $window.CanvasRenderingContext2D),
        isFile: function (item) {
            return angular.isObject(item) && item instanceof $window.File;
        },
        isImage: function (file) {
            var type = '|' + file.type.slice(file.type.lastIndexOf('/') + 1) + '|';
            return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
        }
    };

    return {
        restrict: 'A',
        template: '<canvas/>',
        link: function (scope, element, attributes) {
            var params, canvas, reader;
            if (!helper.support) {
                return;
            }

            params = scope.$eval(attributes.ngThumb);

            if (!helper.isFile(params.file)) {
                return;
            }
            if (!helper.isImage(params.file)) {
                return;
            }

            canvas = element.find('canvas');
            reader = new window.FileReader();

           
            
            function OnLoadImage() {
                /*jshint validthis: true */
                var width, height;
                width = params.width || this.width / this.height * params.height;

                height = params.height || this.height / this.width * params.width;
                canvas.attr({
                    width: width,
                    height: height
                });

                canvas[0].getContext('2d').drawImage(this, 0, 0, width, height);
            }
            
            function onLoadFile(event) {
                var img = new Image();
                img.onload = OnLoadImage;
                img.src = event.target.result;
            }

            reader.onload = onLoadFile;
            reader.readAsDataURL(params.file);
            
        }
    };
}]);
