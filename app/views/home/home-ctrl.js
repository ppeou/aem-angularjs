(function (_w) {
  'use strict';

  angular.module(_w.moduleId).controller('homeCtrl', homeCtrl);

//homeCtrl.$inject = ['$sce'];
  function homeCtrl(/*$sce*/) {
    var ctrl = this;
    ctrl.name = 'World';
  }
})(window);