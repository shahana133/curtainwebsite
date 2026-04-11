// src/components/Navbar.jsx

import { Link } from "react-router-dom"
import { useState } from "react"
import "../styles/navbar.css"
import logo from "../assets/logo.jpg"

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">

      {/* LOGO + NAME */}
      <div className="navbar-logo">
        <Link to="/" className="logo-container">
          <img src={logo} alt="Curtain World Logo" className="logo-img" />
          <span className="logo-text">Curtain World</span>
        </Link>
      </div>

      {/* HAMBURGER ICON */}
      <div 
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      {/* MENU */}
      <ul className={menuOpen ? "nav-menu active" : "nav-menu"}>
        <li><Link to="/" onClick={()=>setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={()=>setMenuOpen(false)}>About</Link></li>
        <li><Link to="/products" onClick={()=>setMenuOpen(false)}>Products</Link></li>
        <li><Link to="/contact" onClick={()=>setMenuOpen(false)}>Contact</Link></li>
      </ul>

    </nav>
  )
}

export default Navbar