import React from 'react';
import ReactDOM from 'react-dom';  // Import directly from 'react-dom' in React 17
import App from './App.jsx';
import './index.css';

// Use ReactDOM.render() to render the app in React 17
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
