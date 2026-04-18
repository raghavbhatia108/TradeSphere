import React from 'react';
import './ComponentStyles.css';

const PortfolioCards = () => {
  const stats = [
    {
      label: 'Total Balance',
      value: '$248,500',
      change: '+18.2%',
      isPositive: true
    },
    {
      label: 'Today\'s Profit',
      value: '+$2,450',
      change: '+0.99%',
      isPositive: true
    },
    {
      label: 'Active Positions',
      value: '12',
      change: '+3 this week',
      isPositive: true
    }
  ];

  return (
    <div className="portfolio-cards">
      {stats.map((stat, index) => (
        <div className="stat-card" key={index}>
          <span className="stat-label">{stat.label}</span>
          <span className="stat-value">{stat.value}</span>
          <span className={`stat-change ${stat.isPositive ? 'positive' : 'negative'}`}>
            {stat.change}
          </span>
        </div>
      ))}
    </div>
  );
};

export default PortfolioCards;
