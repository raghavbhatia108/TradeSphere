import React from 'react'
import './Pricing-Hero.css'

const Hero = () => {
  return (
    <section className="pricing-hero-section">
      <div className="pricing-hero-container">
        <h1>Transparent Pricing That Makes Sense</h1>
        <p>Trade confidently with our industry-leading rates and zero hidden fees</p>
        
        <div className="pricing-highlights">
          <div className="highlight-box">
            <h3>Long-term Investment</h3>
            <p className="price">$0</p>
            <p>Zero commission</p>
          </div>
          <div className="highlight-box">
            <h3>Day Trading & Derivatives</h3>
            <p className="price">$0.25</p>
            <p>Per trade</p>
          </div>
          <div className="highlight-box">
            <h3>Fund Investments</h3>
            <p className="price">$0</p>
            <p>Zero commission</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero