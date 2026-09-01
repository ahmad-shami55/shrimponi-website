import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useBranch } from '../context/BranchContext'
import { useCart } from '../context/CartContext'
import { HomeIcon, DineInIcon, DeliveryIcon, AboutIcon, MapPinIcon, ChevronDownIcon, BagIcon } from './icons/Icons'
import logo from '../assets/logo.png'
import './Navbar.css'

const links = [
  { to: '/', label: 'Home', Icon: HomeIcon },
  { to: '/dine-in', label: 'Dine In', Icon: DineInIcon },
  { to: '/delivery', label: 'Delivery', Icon: DeliveryIcon },
  { to: '/about', label: 'About', Icon: AboutIcon },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [locOpen, setLocOpen] = useState(false)
  const { branch, branchId, setBranchId, branches } = useBranch()
  const { count, setIsOpen } = useCart()

  return (
    <header className="navbar">
      <div className="navbar-inner container">
        <NavLink to="/" className="navbar-brand" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="Shrimponi" />
          <span>SHRIMPONI</span>
        </NavLink>

        <nav className="navbar-links navbar-links-desktop">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) => 'navbar-link' + (isActive ? ' active' : '')}
            >
              <l.Icon className="navbar-link-icon" />
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="navbar-actions">
          <div className="location-dropdown">
            <button className="location-btn" onClick={() => setLocOpen((v) => !v)}>
              <MapPinIcon className="location-pin" />
              <span className="location-text">{branch.name}</span>
              <ChevronDownIcon className={'location-chevron' + (locOpen ? ' open' : '')} />
            </button>
            <AnimatePresence>
              {locOpen && (
                <motion.ul
                  className="location-menu"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.18 }}
                >
                  {branches.map((b) => (
                    <li key={b.id}>
                      <button
                        className={b.id === branchId ? 'active' : ''}
                        onClick={() => {
                          setBranchId(b.id)
                          setLocOpen(false)
                        }}
                      >
                        <strong>{b.name}</strong>
                        <span>{b.address}</span>
                      </button>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

          <button className="cart-btn" onClick={() => setIsOpen(true)} aria-label="Open cart">
            <BagIcon />
            {count > 0 && <span className="cart-badge">{count}</span>}
          </button>

          <button
            className={'hamburger' + (menuOpen ? ' open' : '')}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="navbar-mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) => 'navbar-mobile-link' + (isActive ? ' active' : '')}
              >
                <l.Icon className="navbar-mobile-link-icon" />
                {l.label}
              </NavLink>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
