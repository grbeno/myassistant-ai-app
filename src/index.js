import React from 'react';
import ReactDOM from 'react-dom/client';
import Assistant from './Assistant';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Assistant />
  </React.StrictMode>
);
