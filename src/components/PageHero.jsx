// src/components/PageHero.jsx — replace the whole file
import { motion } from 'framer-motion'
import MediaImage from './MediaImage'
import './PageHero.css'

export default function PageHero({ eyebrow, title, subtitle, compact = false }) {
  return (
    <section className={'page-hero' + (compact ? ' page-hero-compact' : '')}>
      <div className="container">
        <motion.span
          className="eyebrow"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {eyebrow}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          {title}
        </motion.h1>

        <motion.div
          className="page-hero-divider"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <span className="page-hero-divider-line" />
          <span className="page-hero-divider-icon">
            <MediaImage src="/images/hero/shrimp.png" alt="" label="shrimp.png" />
          </span>
          <span className="page-hero-divider-line" />
        </motion.div>

        {subtitle && !compact && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  )
}