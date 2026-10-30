import { ArrowUpRight } from 'lucide-react'
import '../styles/Footer.css'

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <a className="brand footer-brand" href="#home">
          <span className="brand-mark">S<span>.</span></span>
          <span className="brand-name">SHIVAM<span>SHAKYA</span></span>
        </a>
        <p className="footer-tagline">Designed with curiosity. Built with code.</p>
        <a href="#home" className="back-top">
          BACK TO TOP <ArrowUpRight size={14} />
        </a>
        <span className="copyright">© {new Date().getFullYear()} SHIVAM SHAKYA</span>
      </div>
    </footer>
  )
}