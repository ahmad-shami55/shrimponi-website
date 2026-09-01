// src/components/ProductShowcase.jsx
import { motion } from 'framer-motion'
import MediaImage from './MediaImage'
import './ProductShowcase.css'

export default function ProductShowcase({ nameEn, nameAr, tagline, image, theme = 'dark', reverse = false }) {
  return (
    <section className={`showcase showcase-${theme}`}>
      <div className={`container showcase-inner ${reverse ? 'reverse' : ''}`}>
        <motion.div
          className="showcase-text"
          initial={{ opacity: 0, x: reverse ? 60 : -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="eyebrow">{tagline}</span>
          <h2>{nameEn}</h2>
          <p dir="rtl" className="showcase-arabic">
            {nameAr}
          </p>
        </motion.div>

        <motion.div
          className="showcase-media"
          initial={{ opacity: 0, scale: 0.75, x: reverse ? -90 : 90, rotate: reverse ? -10 : 10 }}
          whileInView={{ opacity: 1, scale: 1, x: 0, rotate: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ type: 'spring', stiffness: 90, damping: 14, mass: 0.9 }}
        >
          <motion.div
            className="showcase-photo"
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            whileHover={{ scale: 1.07, rotate: reverse ? -3 : 3, transition: { duration: 0.35, ease: 'easeOut' } }}
          >
            <MediaImage src={image} alt={nameEn} label={nameEn} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}