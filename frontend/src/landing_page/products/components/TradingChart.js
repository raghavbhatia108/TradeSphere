import React from 'react';
import './ComponentStyles.css';

const TradingChart = () => {
  return (
    <div className="trading-chart">
      <div className="chart-header">
        <span className="chart-title">AAPL • $178.42</span>
        <span className="chart-change positive">+2.1%</span>
      </div>
      
      {/* Simplified chart visualization */}
      <svg viewBox="0 0 300 150" className="chart-svg">
        <defs>
          <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#22c55e" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Grid lines */}
        <line x1="0" y1="50" x2="300" y2="50" stroke="#1e293b" strokeWidth="1" />
        <line x1="0" y1="100" x2="300" y2="100" stroke="#1e293b" strokeWidth="1" />
        
        {/* Chart line */}
        <polyline
          points="10,120 30,100 50,110 70,80 90,90 110,60 130,70 150,40 170,50 190,30 210,45 230,25 250,35 270,20 290,15"
          fill="none"
          stroke="#22c55e"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        
        {/* Filled area under chart */}
        <polygon
          points="10,120 30,100 50,110 70,80 90,90 110,60 130,70 150,40 170,50 190,30 210,45 230,25 250,35 270,20 290,15 290,150 10,150"
          fill="url(#chartGradient)"
        />
      </svg>

      <div className="chart-footer">
        <span className="time-period">1D</span>
        <span className="time-period">1W</span>
        <span className="time-period active">1M</span>
        <span className="time-period">3M</span>
        <span className="time-period">1Y</span>
      </div>
    </div>
  );
};

export default TradingChart;
