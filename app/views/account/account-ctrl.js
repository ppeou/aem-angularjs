(function (_w) {
  'use strict';
  var {set} = _w.actions.Account;

  angular.module(_w.moduleId).controller('accountCtrl', homeCtrl);

  function homeCtrl() {
    var ctrl = this;
    ctrl.name = 'to my account';
    ctrl.setAccount = function (e) {
      console.log
      set({username: new Date().toLocaleString()});
    }
  }
})(window);