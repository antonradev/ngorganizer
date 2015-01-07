'use strict';

angular.module('ngorganiser')
  .factory('TasksModel', function ($rootScope, BaseModel, APIBaseUrl, $injector) {

    var url = APIBaseUrl + 'tasks';

    function Model(data) {
      data = data || {};
      data.url = url;
      BaseModel.call(this, data);
    }

    Model.$settings = {url: url};
    Model.prototype = Object.create(BaseModel.prototype);

    //Decorate save to attach this item to the Repository on successful save
    var _$save = Model.prototype.$save;
    Model.prototype.$save = function () {
      var self = this;
      return _$save.apply(this, arguments).then(function (response) {
        var Repository = $injector.get('TasksRepository');
        Repository.attach(self);
        return response;
      });
    };

    return Model;
  });