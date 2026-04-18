import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
export default function Hero() {
  const token = localStorage.getItem("token");
  return (
    <section className="hero">
      <div className="hero-container">

        {/* LEFT CONTENT */}
        <div className="hero-left">
          <h1>Trade Smarter with TradeSphere</h1>
          <p>
            Analyze global markets, track your portfolio, and execute trades — all in one unified platform.
          </p>

          <div className="hero-buttons">
               <Link to={token?"/dashboard":"signup"} className="cta-btn-ts">Open Trading Terminal</Link>
          </div>
        </div>

        {/* RIGHT VISUAL (YOUR DASHBOARD PREVIEW) */}
        <div className="hero-right">
          <div className="dashboard-mock">

            <div className="mock-header">
              <span>TradeSphere Terminal</span>
              <div className="dots">
                <span></span><span></span><span></span>
              </div>
            </div>

            <div className="mock-body">

              {/* Watchlist */}
              <div className="watchlist">
                <p>Watchlist</p>
                <ul>
                  <li>AAPL <span className="green">+2.1%</span></li>
                  <li>TSLA <span className="red">-0.8%</span></li>
                  <li>AMZN <span className="green">+1.5%</span></li>
                </ul>
              </div>

              {/* Chart */}
              <div className="chart">
                <p>Market Overview</p>
                <div className="chart-line"></div>
              </div>

              {/* Orders */}
              <div className="orders">
                <p>Positions</p>
                <div className="order-card">+ $2,450</div>
                <div className="order-card">- $850</div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}