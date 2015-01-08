'use strict';

angular.module('ngorganiser')
        .config(function ($stateProvider, stateFactory) {
            $stateProvider.state('tasks', stateFactory('Tasks', {
                url: '/tasks/{taskId}',
                templateUrl: 'states/tasks/index/tasks-list-view.html'
            }));
        })
        .service('TasksService', function ($http) {
            return {
                getTasks: function() {
                    return $http.jsonp('http://ngorganizer.dev/restserver/index.php/api/task/tasks/format/json/?callback=JSON_CALLBACK');
                }
            };
        });

