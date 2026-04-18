import React from 'react';
import './ComponentStyles.css';

const InvestmentCards = () => {
  const assets = [
    {
      symbol: 'AAPL',
      name: 'Apple Inc.',
      price: '$178.42',
      change: '+2.1%',
      isPositive: true
    },
    {
      symbol: 'TSLA',
      name: 'Tesla Inc.',
      price: '$245.68',
      change: '-0.8%',
      isPositive: false
    },
    {
      symbol: 'AMZN',
      name: 'Amazon.com',
      price: '$192.35',
      change: '+1.5%',
      isPositive: true
    }
  ];

  return (
    <div className="investment-cards">
      {assets.map((asset, index) => (
        <div className="asset-card" key={index}>
          <div className="asset-header">
            <div>
              <span className="asset-symbol">{asset.symbol}</span>
              <span className="asset-name">{asset.name}</span>
            </div>
            <span className={`asset-change ${asset.isPositive ? 'positive' : 'negative'}`}>
              {asset.change}
            </span>
          </div>
          <span className="asset-price">{asset.price}</span>
        </div>
      ))}
    </div>
  );
};

export default InvestmentCards;
