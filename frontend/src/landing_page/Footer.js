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
              <li><button type="button">About Us</button></li>
              <li><button type="button">Products</button></li>
              <li><button type="button">Pricing</button></li>
              <li><button type="button">Careers</button></li>
              <li><button type="button">Blog</button></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <p className="column-title">Support</p>
            <ul>
              <li><button type="button">Help Center</button></li>
              <li><button type="button">Contact Us</button></li>
              <li><button type="button">Status Page</button></li>
              <li><button type="button">API Docs</button></li>
              <li><button type="button">Community</button></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <p className="column-title">Account</p>
            <ul>
              <li><button type="button">Sign In</button></li>
              <li><button type="button">Open Account</button></li>
              <li><button type="button">Fund Transfer</button></li>
              <li><button type="button">Security</button></li>
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
            TradeSphere © 2026. All rights reserved. | <button type="button">Privacy Policy</button> | <button type="button">Terms of Service</button>
          </p>
        </div>
      </div>
    </footer>
  )
}



export default Footer;