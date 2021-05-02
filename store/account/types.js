(function (_w){

  var types = {
    SET: '@@ACCOUNT/SET',
    UNSET: '@@ACCOUNT/UNSET',
  };

  if(!_w.types) {_w.types = {};}

  _w.types.Account = types;
})(window);