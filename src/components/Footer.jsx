import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-col">
          <div className="brand">
            <span className="brand-mark">✦</span>
            <span className="brand-name">Hindustani Jyotish</span>
          </div>
          <p className="footer-about">
            Guidance rooted in Vedic astrology — kundli, matchmaking, and
            remedies to help you navigate life's biggest decisions.
          </p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/horoscope">Horoscope</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li>Kundli / Birth Chart</li>
            <li>Matchmaking (Kundli Milan)</li>
            <li>Career &amp; Business Astrology</li>
            <li>Gemstone Recommendation</li>
            <li>Vastu Consultation</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li>Email: info@hindustanijyotish.com</li>
            <li>Phone: +91 00000 00000</li>
            <li>Mon – Sat: 10:00 AM – 7:00 PM</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {year} Hindustani Jyotish. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
