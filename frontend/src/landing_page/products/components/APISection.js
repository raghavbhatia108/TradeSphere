import React from 'react';
import './ComponentStyles.css';

const APISection = () => {
  return (
    <div className="api-section">
      <div className="api-header">
        <h3>RESTful API Endpoints</h3>
      </div>

      <div className="api-examples">
        <div className="api-example">
          <span className="api-method">GET</span>
          <span className="api-endpoint">/api/v1/market-data</span>
          <span className="api-desc">Real-time market quotes</span>
        </div>

        <div className="api-example">
          <span className="api-method post">POST</span>
          <span className="api-endpoint">/api/v1/orders</span>
          <span className="api-desc">Place new trading order</span>
        </div>

        <div className="api-example">
          <span className="api-method">GET</span>
          <span className="api-endpoint">/api/v1/portfolio</span>
          <span className="api-desc">Fetch portfolio details</span>
        </div>

        <div className="api-example">
          <span className="api-method">GET</span>
          <span className="api-endpoint">/api/v1/history</span>
          <span className="api-desc">Trade history & analytics</span>
        </div>
      </div>

      <div className="code-example">
        <pre>
{`curl -H "Authorization: Bearer TOKEN" \\
  https://api.tradesphere.com/v1/market-data?symbol=AAPL

Response:
{
  "symbol": "AAPL",
  "price": 178.42,
  "change": 2.1,
  "timestamp": "2024-04-17T10:30:00Z"
}`}
        </pre>
      </div>
    </div>
  );
};

export default APISection;
