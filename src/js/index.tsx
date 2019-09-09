import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import Dashboard from '../js/components/Dashboard'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Dashboard />,
  document.getElementById('root')
);

serviceWorker.register();