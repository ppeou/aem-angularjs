(function (_w) {
  'use strict';

  angular.module(_w.moduleId).controller('accountCtrl', homeCtrl);

  function homeCtrl() {
    var ctrl = this;
    ctrl.name = 'to my account';
  }
})(window);