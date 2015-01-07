'use strict';

angular.module('ngorganiser')
        .config(function ($stateProvider, stateFactory) {
            $stateProvider
                    .state('taskEdit', stateFactory('Task', {
                        url: '/edit/:taskId',
                        templateUrl: 'states/task/edit/main-view.html',
                        controller: 'TaskEditCtrl'
                    }));
        })
        .controller("TaskEditCtrl", function ($scope, $http, $stateParams) {

            $scope.formData = {
                name: "Something",
                description: "Dbhdfjsb s sdfjb dsfjhj"
            };
            $scope.saveTask = function () {
                alert('Saving...');
                $scope.Task = $scope.formData;
                /*
                 $http.post('http://posttestserver.com/post.php?dir=jsfiddle', JSON.stringify(formData)).success(function () {
                 });
                 */
            };


            var taskId = $stateParams.taskId;

            $http.jsonp('http://ngorganizer.dev/restserver/index.php/api/task/tasksingle/format/json/?id=' + taskId + '&callback=JSON_CALLBACK').
                    success(function (data) {
                        $scope.Task = data;
                    }).
                    error(function (data) {
                    });
        });
