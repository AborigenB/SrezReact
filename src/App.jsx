import React, { useState } from 'react';
import MainPage from './pages/MainPage';
import { Route, Routes } from 'react-router-dom'
import ProductDetail from './components/ProductDetail';

export default function App () {
  return(
    <Routes>
      <Route path='/' element={<MainPage></MainPage>}></Route>
      <Route path='/:id' element={<ProductDetail/>}></Route>
    </Routes>
  )
};