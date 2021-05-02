(function (_w) {
  var {applyMiddleware, combineReducers, createStore} = _w.Redux;

  const actionLogMiddleWare = (store) => (next) => (action) => {
    console.log("actionLogMiddleWare: ", action);
    next(action);
  }

  var {Account} = _w.reducers;

  var reducers = combineReducers({Account});

  var store = createStore(reducers, applyMiddleware(actionLogMiddleWare));

  _w.store = store;

  function createSubscription(getState) {
    return function(selector, callback) {
      var current;

      function onChange() {
        var previous = current;
        current = selector(getState());
        if (previous !== current) {
          callback(current);
        }
      }

      return store.subscribe(onChange);
    };
  }

  _w.subscribe = createSubscription(store.getState);
})(window);
