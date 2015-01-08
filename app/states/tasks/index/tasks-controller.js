'use strict';

angular.module('ngorganiser')
        .controller("TasksCtrl", function ($scope, TasksService) {

            TasksService.getTasks().then(function (data) {
                $scope.Tasks = data;
            });

        });
        