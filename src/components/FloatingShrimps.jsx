import { motion } from 'framer-motion'
import MediaImage from './MediaImage'
import './FloatingShrimps.css'

// Drop a transparent-background shrimp photo/cutout at
// /public/images/hero/shrimp.png and it will float in automatically.
const shrimps = [
  { top: '8%', left: '6%', size: 60, rotate: -18, duration: 6 },
  { top: '18%', left: '82%', size: 78, rotate: 24, duration: 7.5 },
  { top: '62%', left: '4%', size: 50, rotate: 10, duration: 5.5 },
  { top: '74%', left: '88%', size: 66, rotate: -12, duration: 8 },
  { top: '4%', left: '45%', size: 40, rotate: 16, duration: 5 },
]

export default function FloatingShrimps() {
  return (
    <div className="floating-shrimps" aria-hidden="true">
      {shrimps.map((s, idx) => (
        <motion.div
          key={idx}
          className="floating-shrimp"
          style={{ top: s.top, left: s.left, width: s.size, height: s.size }}
          animate={{
            y: [0, -18, 0],
            rotate: [s.rotate, s.rotate + 8, s.rotate],
          }}
          transition={{
            duration: s.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <MediaImage src="/images/hero/shrimp.png" alt="" label="shrimp.png" />
        </motion.div>
      ))}
    </div>
  )
}
