import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { BranchProvider } from './context/BranchContext'
import { CartProvider } from './context/CartContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'
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
      </CartProvider>
    </BranchProvider>
  )
}
