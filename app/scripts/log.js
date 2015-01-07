'use strict';

angular.module('ngorganiser')
  .config(function ($provide, Config) {
    $provide.decorator('$log', ['$delegate', function ($delegate) {

      var _log = $delegate.log;
      $delegate.log = function () {
        (window.log || _log).apply(null, arguments);
      };

      $delegate.debug = function () {
        if (Config.environment === 'development') _log.apply(null, arguments);
      };

      if (Config.environment === 'development') $delegate.log('[c="font-family: \'Helvetica Neue\', Helvetica, Arial, sans-serif; color: #fff; font-size: 12px; padding: 8px 11px; background: #dedede; border-radius: 4px; line-height: 50px;"]development mode[c]');

      return $delegate;

    }]);
  });
