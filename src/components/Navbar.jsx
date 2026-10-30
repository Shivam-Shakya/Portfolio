import { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import '../styles/Navbar.css'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="header-wrap">
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Shivam home">
          <span className="brand-mark">S<span>.</span></span>
          <span className="brand-name">SHIVAM<span>SHAKYA</span></span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'}>
          {[['About', '#about'], ['Skills', '#skills'], ['Services', '#services'], ['Projects', '#projects'], ['Experience', '#experience'], ['Achievements', '#achievements']].map(([label, href]) => (
            <a key={label} href={href} onClick={closeMenu}>{label}</a>
          ))}
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15} /></a>
        </nav>
      </header>
    </div>
  )
}