import React from 'react';
import Navbar from './Components/Header/Navbar';
import { Routes, Route } from 'react-router-dom';
import Homelink from './Pages/Homelink'
import Loginlink from './Pages/Login__link/Login__link'
import Products from './Components/Products/Products';
import SingleRoute from './Components/Singlerout/Singlerout';
import NotFound from './Components/Notfound/Not__found';

const App = () => {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homelink/>} />
        <Route path="Products:id" element={<Products/>} />
        <Route path="/product/:id" element={<SingleRoute/>} />

        {/* <Route path="/" element={<Loginlink/>} /> */}
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  );
};

export default App;
