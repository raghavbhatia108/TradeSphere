import React from "react";
import "./Awards.css";
import { Icon } from "../../utils/IconUtils";

export default function Features() {
  const features = [
    {
      icon: "📈",
      title: "Real-time Insights",
      description: "Track live market movements and make informed decisions instantly.",
    },
    {
      icon: "⚡",
      title: "Fast Execution",
      description: "Execute trades quickly with a smooth and responsive interface.",
    },
    {
      icon: "📊",
      title: "Smart Charts",
      description: "Analyze trends using interactive and easy-to-read charts.",
    },
    {
      icon: "📁",
      title: "Portfolio Tracking",
      description: "Monitor your investments and performance in one unified dashboard.",
    },
    {
      icon: "👀",
      title: "Watchlist",
      description: "Keep an eye on your favorite stocks and assets in real-time.",
    },
    {
      icon: "🔒",
      title: "Secure Platform",
      description: "Your data and transactions are protected with modern security standards.",
    },
  ];

  return (
    <section className="features">
      <div className="features-container">

        {/* HEADING */}
        <div className="features-header">
          <h2>All-in-One Trading Experience</h2>
          <p>
            TradeSphere brings together powerful tools to help you analyze markets,
            manage your portfolio, and execute trades seamlessly — all in one place.
          </p>
        </div>

        {/* FEATURE CARDS */}
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">
                <Icon emoji={feature.icon} size="28px" />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}