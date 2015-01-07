'use strict';

angular.module('ngorganiser')
        .config(function ($stateProvider, stateFactory) {
            $stateProvider.state('index', stateFactory('Index', {
                url: '/'
            }));
        })
        .controller('IndexCtrl', function ($scope) {
        });
