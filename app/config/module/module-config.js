(function (_w) {
  'use strict';

  _w.appConfig = Object.assign(_w.appConfig || {}, {configModule: configModule});

  configModule.$inject = ['$routeProvider'];

  function configModule($routeProvider) {
    appConfig.configRoutes($routeProvider);
  }

})(window);