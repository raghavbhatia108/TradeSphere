import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const token = localStorage.getItem("token");

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar-tradeSphere">
      <div className="navbar-container">
        <Link className="navbar-brand-ts" to="/" onClick={() => setIsMobileMenuOpen(false)}>
           <img src="media/images/logo1.png" alt="TradeSphere Logo" className="brand-logo" width="60" />
          <span className="brand-logo">Trade<span style={{ color: '#22c55e' }}>Sphere</span></span>
        </Link>
        
        <div className="navbar-links">
          <Link to="/" className="nav-link-ts">Home</Link>
          <Link to="/products" className="nav-link-ts">Products</Link>
          <Link to="/pricing" className="nav-link-ts">Pricing</Link>
          <Link to="/about" className="nav-link-ts">About</Link>
        </div>
        
        <button className="navbar-hamburger" onClick={toggleMobileMenu}>
          ☰
        </button>
        
        <div className="navbar-cta">
          <Link to={token?"/dashboard":"signup"} className="cta-btn-ts">
            Launch Dashboard
          </Link>
        </div>
      </div>
      
      {isMobileMenuOpen && (
        <div className="navbar-mobile-menu">
          
          <Link to="/" className="nav-link-ts" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link to="/products" className="nav-link-ts" onClick={() => setIsMobileMenuOpen(false)}>Products</Link>
          <Link to="/pricing" className="nav-link-ts" onClick={() => setIsMobileMenuOpen(false)}>Pricing</Link>
          <Link to="/about" className="nav-link-ts" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar