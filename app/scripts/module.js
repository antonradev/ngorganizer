'use strict';

var components = angular.module('ngorganiser.components', []);
angular.componentFactory.moduleDecorator(components);

var app = angular.module('ngorganiser', [
  'kennethlynne.componentFactory',
  'ngSymbiosis.utils',
  'ngSymbiosis.routeProvider',
  'ngSymbiosis.repository',
  'ngSymbiosis.model',
  'ngorganiser.components',
  'ngAnimate',
  'ajoslin.promise-tracker',
  'cgBusy',
  'chieffancypants.loadingBar',
  'ui.router',
  'ui.bootstrap',
  'ngCookies',
  'ngResource',
  'restangular',
  'ngSanitize',
  'ngTouch',
  'xeditable',
  'ngStorage'
]);
angular.componentFactory.moduleDecorator(app);