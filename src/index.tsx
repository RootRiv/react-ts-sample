import createBrowserHistory from 'history/createBrowserHistory';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Routes } from './Routes';
import './index.css';
import { Router } from 'react-router';
// import { Provider } from 'react-redux';
// import store from './store/store';

const history = createBrowserHistory();
ReactDOM.render(
  // <Provider store={ store }>
  <Router history={history}>
    <Routes />
  </Router>,
  // </Provider>,
  document.getElementById('root') as HTMLElement,
);
