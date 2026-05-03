import React from "react";
import "./Support.css";

function Hero() {
  return (
    <section className="support-hero">
      <div className="support-header">
        <h1>How Can We Help?</h1>
        <p>Get instant answers or reach out to our support team</p>
      </div>
      <div className="support-content">
        <div className="search-section">
          <h2>Search for help or create a support ticket</h2>
          <input 
            placeholder="Search for common issues..." 
            className="search-input" 
          />
          <div className="quick-links">
            <button type="button">Account Setup</button>
            <button type="button">Trading Guide</button>
            <button type="button">Portfolio Help</button>
            <button type="button">Security</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;