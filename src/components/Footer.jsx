import { Link } from 'react-router-dom'
import { branches } from '../data/branches'
import logo from '../assets/logo.png'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img src={logo} alt="Shrimponi" />
          <p>
            Fried, grilled and sauced the family way. Once you're in, you're family — and family
            eats well.
          </p>
        </div>

        <div className="footer-col">
          <h4>Explore</h4>
          <Link to="/">Home</Link>
          <Link to="/dine-in">Dine In Menu</Link>
          <Link to="/delivery">Delivery Menu</Link>
          <Link to="/about">About</Link>
        </div>

        <div className="footer-col">
          <h4>Our Branches</h4>
          {branches.map((b) => (
            <div key={b.id} className="footer-branch">
              <strong>{b.name}</strong>
              <span>{b.address}</span>
              <a href={`tel:${b.phone.replace(/\s+/g, '')}`}>{b.phone}</a>
            </div>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Shrimponi. All rights reserved.</span>
      </div>
    </footer>
  )
}
