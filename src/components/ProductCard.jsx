import { motion } from 'framer-motion'
import { formatPrice } from '../data/menuData'
import './ProductCard.css'

export default function ProductCard({ product, index = 0, showAddToCart = false, onAdd }) {
  return (
    <motion.div
      className="product-row"
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.4, delay: (index % 8) * 0.04, ease: 'easeOut' }}
    >
      <div className="product-row-top">
        <span className="product-row-name">
          {product.nameEn}
          <span dir="rtl" className="product-row-ar">
            {product.nameAr}
          </span>
          <span className="product-row-dot" />
          {product.isNew && <span className="product-new-tag">NEW</span>}
        </span>
        <span className="product-row-leader" aria-hidden="true" />
        <span className="product-row-price">{formatPrice(product.price)}</span>
      </div>
      <div className="product-row-bottom">
        <p className="product-row-desc">{product.desc}</p>
        {showAddToCart && (
          <button className="product-row-add" onClick={() => onAdd(product)}>
            + Add
          </button>
        )}
      </div>
    </motion.div>
  )
}
