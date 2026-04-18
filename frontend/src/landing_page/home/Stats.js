import React from 'react'
import './Stats.css'

const Stats = () => {
  return (
    <section className="stats-section">
      <div className="stats-container">
        <div className="stats-header">
          <h2>Why Choose TradeSphere?</h2>
          <p>Built for modern traders who demand speed, clarity, and control</p>
        </div>
        
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number">6M+</div>
            <p className="stat-label">Monthly Active Users</p>
          </div>
          <div className="stat-card">
            <div className="stat-number">500K+</div>
            <p className="stat-label">Trades Per Day</p>
          </div>
          <div className="stat-card">
            <div className="stat-number">24/7</div>
            <p className="stat-label">Customer Support</p>
          </div>
          <div className="stat-card">
            <div className="stat-number">$10T+</div>
            <p className="stat-label">Assets Managed</p>
          </div>
        </div>
        
        <div className="stats-highlights">
          <div className="highlight-item">
            <h3>Lightning-Fast Execution</h3>
            <p>Trade with zero latency. Our infrastructure processes orders in milliseconds, giving you the edge you need.</p>
          </div>
          <div className="highlight-item">
            <h3>Zero Compromises on Security</h3>
            <p>Bank-grade encryption, two-factor authentication, and continuous monitoring keep your portfolio safe 24/7.</p>
          </div>
          <div className="highlight-item">
            <h3>Transparent Pricing</h3>
            <p>No hidden fees. See exactly what you'll pay before you trade. Full transparency, always.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats