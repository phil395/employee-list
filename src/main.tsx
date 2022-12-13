import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './assets/variables.css';
import './assets/null.css';
import './assets/main.css';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
