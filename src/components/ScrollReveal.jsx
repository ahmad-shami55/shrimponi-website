import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import MediaImage from './MediaImage'
import './ScrollReveal.css'

export default function ScrollReveal() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.35, 1.1, 1])
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [-20, 0, 6])
  const opacity = useTransform(scrollYProgress, [0, 0.18, 0.82, 1], [0, 1, 1, 0.85])
  const spotlightScale = useTransform(scrollYProgress, [0, 0.55], [0.2, 3.2])
  const textY = useTransform(scrollYProgress, [0.12, 0.5], [50, 0])
  const textOpacity = useTransform(scrollYProgress, [0.12, 0.4], [0, 1])

  return (
    <section className="scroll-reveal" ref={ref}>
      <div className="scroll-reveal-sticky">
        <motion.div className="scroll-reveal-spotlight" style={{ scale: spotlightScale }} />
        <motion.div className="scroll-reveal-character" style={{ scale, rotate, opacity }}>
          <MediaImage
            src="/images/hero/scroll-character.jpg"
            alt="Shrimponi — The Don is watching"
            label="scroll-character.jpg"
          />
        </motion.div>
        <motion.div className="scroll-reveal-text" style={{ y: textY, opacity: textOpacity }}>
          <span className="eyebrow">the family business</span>
          <h2>
            Every Bite Is An Offer
            <br />
            You Can't Refuse
          </h2>
        </motion.div>
      </div>
    </section>
  )
}