import React from 'react'
import './Universe.css'
import { Icon } from '../../utils/IconUtils'

const Universe = () => {
  const ecosystemItems = [
    {
      icon: '📊',
      title: 'Advanced Analytics',
      description: 'Deep market analysis and strategy tools for serious traders'
    },
    {
      icon: '🤖',
      title: 'Algo Trading',
      description: 'Build and backtest trading algorithms with our API'
    },
    {
      icon: '📈',
      title: 'Options Trading',
      description: 'Specialized tools for options and derivatives trading'
    },
    {
      icon: '💼',
      title: 'Wealth Management',
      description: 'Professional portfolio management and advisory services'
    },
    {
      icon: '🔗',
      title: 'Fixed Income',
      description: 'Trade bonds and fixed-income securities'
    },
    {
      icon: '🛡️',
      title: 'Insurance Solutions',
      description: 'Integrated insurance products for wealth protection'
    }
  ]

  return (
    <section className="universe-section">
      <div className="universe-container">
        <div className="universe-header">
          <h2>Extend Your Trading Experience</h2>
          <p>Discover our partner ecosystem of complementary trading and investment tools</p>
        </div>
        
        <div className="universe-grid">
          {ecosystemItems.map((item, index) => (
            <div className="universe-card" key={index}>
              <div className="card-icon">
                <Icon emoji={item.icon} size="32px" />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}




export default Universe
