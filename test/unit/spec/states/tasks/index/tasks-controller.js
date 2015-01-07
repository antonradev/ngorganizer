'use strict';

describe('Controller(/tasks): TasksCtrl', function () {

  var TasksCtrl, scope;

  beforeEach(function () {

    module('ngorganiser');

    inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      TasksCtrl = $controller('TasksCtrl', {
        $scope: scope
      });
    });
  });

  it('should attach init data to scope', function () {
    expect(scope.foo).toEqual('bar');
  });
});