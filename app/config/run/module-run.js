(function (_w) {
  'use strict';

  _w.appConfig = Object.assign(_w.appConfig || {}, {runModule: runModule});

  runModule.$inject = ['$rootScope'];
  function runModule(args) {
    console.log('run module', args);
  }

})(window);