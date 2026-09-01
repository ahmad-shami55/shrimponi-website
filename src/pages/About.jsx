import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import { branches } from '../data/branches'
import logo from '../assets/logo.png'
import './About.css'

const values = [
  {
    title: 'Fresh, Always',
    text: 'Every piece of shrimp, fillet, and calamari is prepped fresh and fried to order — nothing sits around waiting for you.',
  },
  {
    title: 'Family Recipes',
    text: 'Our sauces — Shrimponi, Dynamite, Luciano — are house-made recipes passed around the kitchen like family secrets.',
  },
  {
    title: 'Loyalty Over Everything',
    text: 'Two branches, one standard. Whichever door you walk through, you get treated like family.',
  },
]

export default function About() {
  return (
    <div>
      <PageHero
        eyebrow="Our Story"
        title="The Don Of Seafood"
        subtitle="Every great family business starts with a recipe worth protecting."
      />

      <section className="about-story">
        <div className="container about-story-inner">
          <motion.img
            src={logo}
            alt="Shrimponi character"
            initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          />
          <div>
            <h2>An Offer Worth Making</h2>
            <p>
              Shrimponi started with one belief: seafood done right doesn't need to be
              complicated, it needs to be respected. Crispy on the outside, tender inside, and
              finished with sauces the whole neighborhood talks about.
            </p>
            <p>
              From our Classic Shrimp to the newer Luciano and Gambino creations, every dish on
              the menu carries the same house rule — quality is non-negotiable.
            </p>
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="container">
          <span className="eyebrow">What We Stand For</span>
          <div className="about-values-grid">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                className="about-value-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-branches">
        <div className="container">
          <span className="eyebrow">Find Us</span>
          <h2>Our Branches</h2>
          <div className="about-branches-grid">
            {branches.map((b) => (
              <div className="about-branch-card" key={b.id}>
                <h3>{b.name}</h3>
                <p>{b.address}</p>
                <a href={`tel:${b.phone.replace(/\s+/g, '')}`}>{b.phone}</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
