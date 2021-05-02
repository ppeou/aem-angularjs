(function (_w) {
  'use strict';
  var {SET, UNSET} =  _w.types.Account;

  const reducer = (state = {}, action) => {
    const {type, value} = action;
    if(type === SET) {
      return {...state, ...value};
    }
    return state;
  };

  if(!_w.reducers) {_w.reducers = {};}

  _w.reducers.Account = reducer;

})(window);