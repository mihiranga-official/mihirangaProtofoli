import React from 'react';
import ReactDOM from 'react-dom/client';
import ResponsiveDrawer from './Drawer/SlideBar'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <ResponsiveDrawer></ResponsiveDrawer>
  </React.StrictMode>
);


