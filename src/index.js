import React from 'react';
import ReactDOM from 'react-dom/client';
import ResponsiveDrawer from './Drawer/SlideBar'
import App from './App';
import BigImage from './Drawer/Img'
import About from './Drawer/About'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />

    <ResponsiveDrawer>


    </ResponsiveDrawer>
    <BigImage></BigImage>
<About></About>
  </React.StrictMode>
);


