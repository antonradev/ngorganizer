'use strict';

angular.module('ngorganiser')
        .config(function ($stateProvider, stateFactory) {
            $stateProvider
                    .state('taskEdit', stateFactory('Task', {
                        url: '/edit/:taskId',
                        templateUrl: 'states/task/edit/edit-task-view.html',
                        controller: 'TaskEditCtrl'
                    }));
        })
        .controller("TaskEditCtrl", function ($scope, $http, $stateParams, $window, TaskService) {

            var taskId = $stateParams.taskId;

            TaskService.then(function (tasksData) {

                $scope.Task = tasksData;

                $scope.saveTask = function () {


                    $http.post('http://ngorganizer.dev/restserver/index.php/api/task/taskupdate/' + taskId + '/format/json/?callback=JSON_CALLBACK', $scope.Task.data).then(function (data) {
//                        $state.go('tasks');
                        $window.history.back();

                    });





                };

            });


        }); // End of TaskEditCtrl Controller
