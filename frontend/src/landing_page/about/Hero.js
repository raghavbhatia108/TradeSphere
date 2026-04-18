import React from "react";
import "./About.css";

const Hero = () => {
  return (
    <div className="about-hero">
      <div className="about-container">
        <div className="about-header">
          <h1>Building the Future of Trading</h1>
          <p>Democratizing professional-grade trading tools for everyone</p>
        </div>
        <div className="about-story">
          <div className="story-column">
            <p>
              TradeSphere was founded with a mission to revolutionize how people trade and invest.
              We believe that every trader deserves access to institutional-grade tools, real-time data,
              and intelligent insights without complexity or excessive costs.
            </p>
            <p>
              Our founding team comes from leading fintech and investment firms, bringing together
              decades of combined experience in trading, technology, and market infrastructure.
            </p>
            <p>
              Today, hundreds of thousands of traders trust TradeSphere with their portfolios,
              executing over 500,000 trades daily across equities, derivatives, and alternative assets.
            </p>
          </div>
          <div className="story-column">
            <p>
              What sets us apart is our unwavering commitment to transparency, security, and innovation.
              We continuously invest in technology to provide the fastest execution, most advanced charts,
              and best-in-class user experience.
            </p>
            <p>
              Beyond just trading, we're building an ecosystem of learning resources, community forums,
              and market intelligence tools to empower every decision you make.
            </p>
            <p>
              We're just getting started. Every day, we're working to make TradeSphere the most trusted
              and beloved trading platform for millions of traders worldwide.
            </p>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Hero;
