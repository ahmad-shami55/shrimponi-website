import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import './AboutTeaser.css'

export default function AboutTeaser() {
  return (
    <section className="about-teaser">
      <div className="container about-teaser-inner">
        <motion.img
          src={logo}
          alt="Shrimponi"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="eyebrow">Who We Are</span>
          <h2>Built On Family Recipes</h2>
          <p>
            Two branches, one house standard: fresh seafood, bold house-made sauces, and the kind
            of hospitality that makes you feel like part of the family the moment you walk in.
          </p>
          <Link to="/about" className="btn btn-navy">
            Our Story
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
