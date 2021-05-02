(function (_w) {
  'use strict';

  _w.appConfig = Object.assign(_w.appConfig || {}, {configModule: configModule});

  var log4js = _w.log4js;

  configModule.$inject = ['$routeProvider'];

  function configModule($routeProvider) {
    console.log('config module:', _w.moduleId);
    appConfig.configRoutes($routeProvider);

    Object.assign(log4js.config, {level: 'all', username: 'SETH-1', app: _w.moduleId});

    window.logger = log4js.getLogger();
    window.getLogger = logger.set;

    logger.fatal('This is Fatal');
  }

})(window);