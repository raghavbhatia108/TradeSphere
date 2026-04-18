import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const token = localStorage.getItem("token");
  return (
    <nav className="navbar-tradeSphere">
      <div className="navbar-container">
        <Link className="navbar-brand-ts" to="/" >
           <img src="media/images/logo1.png" alt="TradeSphere Logo" className="brand-logo" width="60" />
          <span className="brand-logo">Trade<span style={{ color: '#22c55e' }}>Sphere</span></span>
        </Link>
        
        <div className="navbar-links">
          <Link to="/" className="nav-link-ts">Home</Link>
          <Link to="/products" className="nav-link-ts">Products</Link>
          <Link to="/pricing" className="nav-link-ts">Pricing</Link>
          <Link to="/about" className="nav-link-ts">About</Link>
        </div>
        
        <div className="navbar-cta">
          <Link to={token?"/dashboard":"signup"} className="cta-btn-ts">
            Launch Dashboard
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar