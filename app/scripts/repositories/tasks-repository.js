'use strict';

angular.module('ngorganiser')
  .factory('TasksRepository', function ($injector, TasksModel) {
    var BaseRepository = $injector.get('BaseRepository');
    return new BaseRepository({name: 'TasksRepository', model: TasksModel});
  });