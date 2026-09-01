import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import FloatingShrimps from './FloatingShrimps'
import logo from '../assets/logo.png'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <FloatingShrimps />
      <div className="container hero-inner">
        <motion.img
          src={logo}
          alt="Shrimponi — The Don"
          className="hero-logo"
          initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        />
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          THE DON OF SEAFOOD
        </motion.h1>
        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.28 }}
        >
          Crispy shrimp, fresh fillet, bold sauces — made the family way, served your way.
        </motion.p>
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link to="/dine-in" className="btn btn-orange">
            Dine In Menu
          </Link>
          <Link to="/delivery" className="btn btn-outline">
            Delivery Menu
          </Link>
        </motion.div>
      </div>

      <motion.div
        className="hero-scroll-cue"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
       
      </motion.div>
    </section>
  )
}
