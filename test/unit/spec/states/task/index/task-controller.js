'use strict';

describe('Controller(/task): TaskCtrl', function () {

  var TaskCtrl, scope;

  beforeEach(function () {

    module('ngorganiser');

    inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      TaskCtrl = $controller('TaskCtrl', {
        $scope: scope
      });
    });
  });

  it('should attach init data to scope', function () {
    expect(scope.foo).toEqual('bar');
  });
});