import React from 'react';
import { BrowserRouter, HashHistory } from 'react-router-dom';
import App from './src/App';
import './src/index.css';

const history = process.env.NODE_ENV === 'production' ?
  new HashHistory() :
  new BrowserRouter()

React.render(
  <App history={history} />,
  document.getElementById('root')
);
