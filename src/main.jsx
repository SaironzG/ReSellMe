// src/main.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { DarkModeProvider } from './DarkModeContext';
import './index.css'; // Import global CSS here

ReactDOM.render(
  <DarkModeProvider>
    <App />
  </DarkModeProvider>,
  document.getElementById('root')
);
