import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="tradeSphere-footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>TradeSphere</h3>
            <p>© 2026 TradeSphere. All rights reserved.</p>
            <p className="disclaimer">Professional trading platform with institutional-grade tools.</p>
          </div>
          
          <div className="footer-column">
            <p className="column-title">Company</p>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <p className="column-title">Support</p>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Status Page</a></li>
              <li><a href="#">API Docs</a></li>
              <li><a href="#">Community</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <p className="column-title">Account</p>
            <ul>
              <li><a href="#">Sign In</a></li>
              <li><a href="#">Open Account</a></li>
              <li><a href="#">Fund Transfer</a></li>
              <li><a href="#">Security</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-legal">
          <p>
            <strong>Risk Disclosure:</strong> Trading and investing in financial markets involves substantial risk of loss. 
            Please read all related documents carefully before investing. TradeSphere is a regulated trading platform.
          </p>
          <p>
            Identity verification is a one-time process with any regulated broker. Your information is protected with bank-grade security.
          </p>
          <p className="footer-copyright">
            TradeSphere © 2026. All rights reserved. | <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  )
}



export default Footer;