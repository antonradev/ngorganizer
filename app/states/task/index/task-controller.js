'use strict';

angular.module('ngorganiser')
        .controller("TaskCtrl", function ($scope, TaskService) {

            TaskService.then(function (TaskService) {
                $scope.Task = TaskService;
            });

        });
