// src/App.jsx — same caveat as above: this assumes your file looks like this.
// Safer option: just add these two lines to your existing App.jsx —
//   1) import StickyCartBar from './components/StickyCartBar'  (near your other imports)
//   2) <StickyCartBar />  (right after <CartDrawer /> in the JSX)
import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { BranchProvider } from './context/BranchContext'
import { CartProvider } from './context/CartContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'
import StickyCartBar from './components/StickyCartBar'
import Home from './pages/Home'
import About from './pages/About'
import DineInMenu from './pages/DineInMenu'
import DeliveryMenu from './pages/DeliveryMenu'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <BranchProvider>
      <CartProvider>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dine-in" element={<DineInMenu />} />
          <Route path="/delivery" element={<DeliveryMenu />} />
        </Routes>
        <Footer />
        <CartDrawer />
        <StickyCartBar />
      </CartProvider>
    </BranchProvider>
  )
}