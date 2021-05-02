(function (_w){
  'use strict';

  var {createSelector} = _w.Reselect;

  var rootSelector = function (state) {
    return state.Account;
  };

  var usernameSelector = createSelector(rootSelector, function (data) {
    return data.username;
  });


  if(!_w.selectors) {_w.selectors = {};}

  _w.selectors.Account = {usernameSelector};

})(window);
