angular.module('ngorganiser')
  .run(function (Config, $httpBackend, $log, APIBaseUrl, regexEscape, guid, mockRepository) {
    if (!Config.API.useMocks) return;

    var collectionUrl = APIBaseUrl + 'tasks';
    var IdRegExp = /[\d\w-_]+$/.toString().slice(1, -1);

    var tasks = collectionUrl;
    var TaskById = new RegExp(regexEscape(collectionUrl + '/') + IdRegExp);

    $log.log('***************************************************************************************************************');
    $log.log('Overriding all calls to `' + collectionUrl + '` with mocks defined in *dev/task-mocks.js*');
    $log.log('***************************************************************************************************************');

    var seed = [
      {id: guid(), text: 'AngularJS'},
      {id: guid(), text: 'Karma'},
      {id: guid(), text: 'Yeoman'},
      {id: guid(), text: 'Generator-angular-xl'}
    ];

    var TaskRepo = mockRepository.create();

    angular.forEach(seed, function (item, key) {
        TaskRepo.insert(item.id, item);
    });

    //GET tasks/
    $httpBackend.whenGET(tasks).respond(function (method, url, data, headers) {
      $log.debug('Intercepted GET to `' + url + '`', data);
      return [200, TaskRepo.getAll(), {/*headers*/}];
    });

    //POST tasks/
    $httpBackend.whenPOST(tasks).respond(function (method, url, data, headers) {
      $log.debug('Intercepted POST to `' + url + '`', data);

      var Task = TaskRepo.push(angular.fromJson(data));

      return [200, Task, {/*headers*/}];
    });

    //GET tasks/<id>
    $httpBackend.whenGET(TaskById).respond(function (method, url, data, headers) {
      $log.debug('Intercepted GET to `' + url + '`');
      var id = url.match(new RegExp(IdRegExp))[0];
      var item = TaskRepo.getById(id);
      return [item ? 200 : 404, item || null, {/*headers*/}];
    });

    //PUT tasks/<id>
    $httpBackend.whenPUT(TaskById).respond(function (method, url, data, headers) {
      $log.debug('Intercepted PUT to `' + url + '`');
      var id = url.match(new RegExp(IdRegExp))[0];

      if (!TaskRepo.getById(id)) {
        return [404, {} , {/*headers*/}];
      }

      var Task = TaskRepo.insert(id, angular.fromJson(data));

      return [200, Task, {/*headers*/}];
    });

    //DELETE tasks/<id>
    $httpBackend.whenDELETE(new RegExp(regexEscape(collectionUrl + '/') + IdRegExp)).respond(function (method, url, data, headers) {
      $log.debug('Intercepted DELETE to `' + url + '`');
      var id = url.match(new RegExp(IdRegExp))[0];

      var Task = TaskRepo.getById(id);
      if (!Task) {
        return [404, {} , {/*headers*/}];
      }
      TaskRepo.remove(Task.id);

      return [200, Task , {/*headers*/}];
    });

  });


