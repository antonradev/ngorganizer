'use strict';

angular.module('ngorganiser')
        .config(function ($stateProvider, stateFactory) {
            $stateProvider.state('task', stateFactory('Task', {
                url: '/task/:taskId',
                templateUrl: 'states/task/index/task-single-view.html'
            }));
        })
        .service('TaskService', function ($http, $stateParams) {
            var taskId = $stateParams.taskId;
            return $http.jsonp('http://ngorganizer.dev/restserver/index.php/api/task/tasksingle/format/json/?id=' + taskId + '&callback=JSON_CALLBACK');
        });
