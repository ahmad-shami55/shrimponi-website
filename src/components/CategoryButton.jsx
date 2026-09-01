// src/components/CategoryButton.jsx
import { motion } from 'framer-motion'
import MediaImage from './MediaImage'
import './CategoryButton.css'

export default function CategoryButton({ category, onClick, index = 0 }) {
  return (
    <motion.button
      className="category-tile"
      onClick={onClick}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.45, delay: (index % 8) * 0.05, ease: 'easeOut' }}
      whileHover="hover"
      whileTap={{ scale: 0.96 }}
    >
      <motion.div
        className="category-tile-photo"
        variants={{ hover: { scale: 1.1 } }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        <MediaImage src={category.image} alt={category.nameEn} label={category.nameEn} />
      </motion.div>

      <span className="category-tile-scrim" aria-hidden="true" />

      <motion.span
        className="category-tile-edge"
        variants={{ hover: { opacity: 1 } }}
        transition={{ duration: 0.3 }}
        aria-hidden="true"
      />

      <motion.div className="category-tile-label" variants={{ hover: { y: -3 } }} transition={{ duration: 0.25 }}>
        <span className="category-tile-name">{category.nameEn}</span>
        <span className="category-tile-name-ar" dir="rtl">
          {category.nameAr}
        </span>
      </motion.div>
    </motion.button>
  )
}