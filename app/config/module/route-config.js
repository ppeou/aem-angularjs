(function (_w) {
  'use strict';

  _w.appConfig = Object.assign(_w.appConfig || {}, {configRoutes: config});

  function config(provider) {
    provider
      .when('/', {
        templateUrl: 'app/views/home/home-ctrl.html',
      })
      .when('/account', {
        templateUrl: 'app/views/account/account-ctrl.html',
      }).otherwise({
      redirectTo: '/'
    });

    return provider;
  }


})(window);
