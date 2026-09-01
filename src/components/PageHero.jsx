import { motion } from 'framer-motion'
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
