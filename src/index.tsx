import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import Journal from './components/Journal';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    Hello, Human Computer Interaction
    <Journal></Journal>
  </React.StrictMode>
);