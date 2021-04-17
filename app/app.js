(function (_w) {
  'use strict';

  var module = angular.module(_w.moduleId, ['ngRoute']);
  module.config(_w.appConfig.configModule).run(_w.appConfig.runModule);

})(window);