import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducer from '../reducer/reducer.js';

const logMiddleware = ({ getState }) => (next) => (action) => {
  console.log("action", action.type, getState());
  return next(action);
}

/*const stringMiddleware = () => (next) => (action) => {
  if (typeof action === 'string') {
    return next({
      type: action,
    })
  }
  return next(action);
}*/

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(
  thunk, logMiddleware)));

export default store;