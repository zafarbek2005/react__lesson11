import React from 'react';
import Navbar from './Components/Header/Navbar';
import { Routes, Route } from 'react-router-dom';
import Homelink from './Pages/Homelink'
import Loginlink from './Pages/Login__link/Login__link'
import Products from './Components/Products/Products';

const App = () => {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homelink/>} />
        <Route path="Products" element={<Products/>} />
        {/* <Route path="/" element={<Loginlink/>} /> */}

      </Routes>
    </>
  );
};

export default App;
