// src/App.js
import React from 'react';
import './App.css'
import NavbarComponent from './Components/Navbar/NavbarComponent';
import Home from './Components/Route/Home'
import { Route, Routes } from 'react-router-dom';
import About from './Components/Route/About';
import Skill from './Components/Route/Skill';
import Portfolio from './Components/Route/Portfolio';
import Contract from './Components/Route/Contract';
import Education from './Components/Route/Education';
import Footer from './Components/Shared/Footer';

const App = () => (
  <div className=''>
    <NavbarComponent>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/skill' element={<Skill />} />
        <Route path='/education' element={<Education />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contract' element={<Contract />} />
      </Routes>
    <Footer/>
    </NavbarComponent>
  </div>
);

export default App;
