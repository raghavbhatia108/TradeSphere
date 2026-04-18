import React from 'react'
import './Pricing.css'

const Pricing = () => {
  return (
    <section className="pricing-section">
      <div className="pricing-container">
        <div className="pricing-header">
          <h2>Simple, Transparent Pricing</h2>
          <p>No hidden fees. No surprises. Just pure trading.</p>
        </div>
        
        <div className="pricing-grid">
          <div className="pricing-card">
            <h3>Day Trading</h3>
            <div className="price">$0.25<span>/trade</span></div>
            <ul className="pricing-features">
              <li>Fast execution</li>
              <li>Advanced charts</li>
              <li>Real-time data</li>
              <li>24/7 support</li>
            </ul>
          </div>
          
          <div className="pricing-card featured">
            <span className="badge">Most Popular</span>
            <h3>Long-term Investment</h3>
            <div className="price">$0<span>/trade</span></div>
            <ul className="pricing-features">
              <li>Zero commission</li>
              <li>Secure holdings</li>
              <li>Tax reports</li>
              <li>24/7 support</li>
            </ul>
          </div>
          
          <div className="pricing-card">
            <h3>Derivatives Trading</h3>
            <div className="price">$0.50<span>/trade</span></div>
            <ul className="pricing-features">
              <li>Leverage trading</li>
              <li>Advanced tools</li>
              <li>Risk management</li>
              <li>24/7 support</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing