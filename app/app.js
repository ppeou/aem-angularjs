(function (_w) {
  'use strict';

  var module = angular.module(_w.moduleId, ['ngRoute']);
  module.config(configModule).run(runModule);;

  configModule.$inject = ['$routeProvider'];

  function configModule($routeProvider) {
    configRoutes($routeProvider);
  }

  function configRoutes($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/views/home/home-ctrl.html',
      }).otherwise({
      redirectTo: '/'
    });

    return $routeProvider;
  }

  runModule.$inject = [];
  function runModule() { }

})(window);