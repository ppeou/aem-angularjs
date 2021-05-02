(function (_w) {
  'use strict';

  _w.appConfig = Object.assign(_w.appConfig || {}, {configRoutes: config});

  function config(provider) {
    console.log('config route');
    provider
      .when('/', {
        templateUrl: 'app/views/home/home.html',
      })
      .when('/account', {
        templateUrl: 'app/views/account/account.html',
      }).otherwise({
      redirectTo: '/'
    });

    return provider;
  }


})(window);
