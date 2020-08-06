import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App/App.js'
import ErrorCatcher from './components/ErrorCatcher/ErrorCatcher.js';

import store from './store/store.js';

ReactDOM.render(
  <Provider store={store}>
    <ErrorCatcher> 
      <App />
    </ErrorCatcher> 
  </Provider>,
  document.getElementById('root')
);
  
