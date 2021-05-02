(function (_w){

  var {SET, UNSET} =  _w.types.Account;
  var {dispatch} = _w.store;

  var set = function (data) {
    dispatch({type: SET, value: data});
  };
  var unset = function (data) {
    dispatch({type: SET, value: {}});
  };

  var actions = {
    set, unset
  };

  if(!_w.actions) {_w.actions = {};}

  _w.actions.Account = actions;

})(window);