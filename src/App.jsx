import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Product from './pages/Product'
import Cart from './pages/cart'
import Navbar from './components/Navbar'

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Product/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </div>
  )
}

export default App
