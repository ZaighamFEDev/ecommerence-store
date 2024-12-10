import React from 'react'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
// import ProductDetails from './pages/ProductDetails'
import Navbar from './components/Navbar'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
// import { ProductDetails } from './pages/ProductDetails'


function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={ <Cart />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={ <ProductDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App