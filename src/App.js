
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Drawer/About';
import Experience from './Drawer/Experience'
import  Projects  from './Drawer/Projects'
import Skills from './Drawer/Skills';
import Contact from './Drawer/Contact';
import Education from './Drawer/Education';
import Blog from './Drawer/Blog';
import Resume from './Drawer/Resume';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      {/* <Route path='/' exact element={<About/>}></Route> */}
      <Route path='experience' exact element={<Experience/>}></Route>
      <Route path='projects' exact element={<Projects/>}></Route>
      <Route path='skills' exact element={<Skills/>}></Route>
      <Route path='contact' exact element={<Contact/>}></Route>
      <Route path='education' exact element={<Education/>}></Route>
      <Route path='blog' exact element={<Blog/>}></Route>
      <Route path='resume' exact element={<Resume/>}></Route>
  
    </Routes>
    
    </BrowserRouter>
    </>
  );
}

export default App;
