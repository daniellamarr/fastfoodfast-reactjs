import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import '../public/css/App.css';
import '../public/css/themify-icons.css';

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);

module.hot.accept();
