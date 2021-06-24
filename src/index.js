import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.module.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const app = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

ReactDOM.render(
  app,
  document.getElementById('root')
);

reportWebVitals();
