(function (_w) {
  'use strict';

  var subscribe = _w.subscribe;
  var {usernameSelector} = _w.selectors.Account;

  angular.module(_w.moduleId).controller('topNavigationCtrl', topNavigationCtrl);

  function topNavigationCtrl(/*$sce*/) {
    var ctrl = this;
    ctrl.username = '';
    ctrl.unsubscribe = subscribe(usernameSelector, function (username){
      console.log('change', username);
      ctrl.username = username;
    });

    ctrl.links = [
      {label: 'Home', href:'/#!/'},
      {label: 'Account', href:'/#!/account'},
    ];
  }
})(window);