'use strict';

angular.module('ngorganiser')
        .controller("TasksCtrl", function ($scope, TasksService) {

            TasksService.then(function (TasksService) {
                $scope.Tasks = TasksService;
            });


        });
