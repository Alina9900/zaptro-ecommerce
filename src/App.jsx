import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Navbar from './Components/Navbar'
import axios from "axios"
import Footer from './Components/Footer'
import SingleProduct from './Components/SingleProduct'
import { useCart } from './context/CartContext'
const App = () => {
  const {cartItem,setCartItem}=useCart()
  const [location, setLocation] = useState(null)
  const [openDropdown, setOpenDropdown] = useState(false)
  const getLocation = async () => {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const { latitude, longitude } = pos.coords

      const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`

      try {
        const res = await axios.get(url)
        setLocation(res.data.address)
        setOpenDropdown(false)
      } catch (err) {
        console.log("Location permission denied:", err.message);
        setOpenDropdown(false);   // also close dropdown when denied
      }
    })
  }

  useEffect(() => {
    getLocation()
  }, [])

  return (
    <div className='min-h-screen flex flex-col'>
      <BrowserRouter >
        <Navbar location={location} getLocation={getLocation} openDropdown={openDropdown} setOpenDropdown={setOpenDropdown} />
        <main className='grow'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<SingleProduct />} />

            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
