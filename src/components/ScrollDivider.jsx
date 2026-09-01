import { motion } from 'framer-motion'
import './ScrollDivider.css'

export default function ScrollDivider({ theme = 'dark' }) {
  return (
    <div className={`scroll-divider scroll-divider-${theme}`} aria-hidden="true">
      <span className="scroll-divider-line" />
      <motion.span
        className="scroll-divider-chevron"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
      >
        ▾
      </motion.span>
      <span className="scroll-divider-line" />
    </div>
  )
}
