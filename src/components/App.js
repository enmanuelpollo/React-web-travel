import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Services from '../pages/Services';
import Products from '../pages/Products';
import SingUp from '../pages/SingUp';
import AboutUs from '../pages/AboutUs';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/services'Component={Services}/>
          <Route path='/products' Component={Products} />
          <Route path='/about-us' Component={AboutUs} />
          <Route path='/sing-up'  Component={SingUp} />  
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;