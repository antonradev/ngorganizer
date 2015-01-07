'use strict';

describe('Service: AdditionalInfoService', function () {

  var AdditionalInfoService;

  beforeEach(function () {

    module('ngorganiser');

    inject(function (_AdditionalInfoService_) {
      AdditionalInfoService = _AdditionalInfoService_;
    });

  });


  it('should do something', function () {
    expect(!!AdditionalInfoService).toBe(true);
  });

});