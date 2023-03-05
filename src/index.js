import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import appLayout from './utils/Routes';
import { RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <RouterProvider router={appLayout} />
)

