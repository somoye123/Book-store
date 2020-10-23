import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import { createStore } from 'redux';
import { Provider as ReduxProvider } from 'react-redux';
import RootReducer from './reducers';
import App from './App';

const store = createStore(RootReducer);

ReactDOM.render(
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>,
  document.getElementById('root'),
);
