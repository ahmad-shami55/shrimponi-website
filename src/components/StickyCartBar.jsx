// src/components/StickyCartBar.jsx — new file
import { AnimatePresence, motion } from 'framer-motion'
import { useCart } from '../context/CartContext'
import { formatPrice } from '../data/menuData'
import { BagIcon, ChevronRightIcon } from './icons/Icons'
import './StickyCartBar.css'

export default function StickyCartBar() {
  const { count, total, isOpen, setIsOpen } = useCart()

  return (
    <AnimatePresence>
      {count > 0 && !isOpen && (
        <motion.button
          className="sticky-cart-bar"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 26 }}
          onClick={() => setIsOpen(true)}
        >
          <span className="sticky-cart-bar-info">
            <BagIcon className="sticky-cart-bar-icon" />
            <span className="sticky-cart-bar-text">
              <strong>
                {count} {count === 1 ? 'item' : 'items'}
              </strong>
              <em>{formatPrice(total)}</em>
            </span>
          </span>
          <span className="sticky-cart-bar-cta">
            View Cart
            <ChevronRightIcon />
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  )
}