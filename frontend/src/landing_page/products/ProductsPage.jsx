import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
import TradingChart from "./components/TradingChart";
import PortfolioCards from "./components/PortfolioCards";
import InvestmentCards from "./components/InvestmentCards";
import APISection from "./components/APISection";
import LearningSection from "./components/LearningSection";

const ProductsPage = () => {
  return (
    <>
      <Hero />
      <LeftSection
        content={<TradingChart />}
        productName="TradeSphere Terminal"
        productDescription="Our ultra-fast flagship trading platform with real-time market data, advanced technical analysis tools, an intuitive UI, and more. Experience seamless trading on your desktop, tablet, and mobile devices."
        tryDemo="Try Live Demo"
        learnMore="Learn More"
        googlePlay="Download Mobile"
        appStore="iOS App"
      />
      <RightSection 
        content={<PortfolioCards />}
        productName="Portfolio Manager"
        productDescription="Your central dashboard for complete portfolio visibility. Gain real-time insights into your trades, investments, and performance with comprehensive reports and beautiful visualizations."
        learnMore="Explore Manager"
      />
      <LeftSection
        content={<InvestmentCards />}
        productName="Investment Hub"
        productDescription="Explore and invest in stocks, ETFs, and mutual funds with zero commission on long-term trades. Simple, transparent investing delivered directly to your account."
        tryDemo="Start Investing"
        learnMore="Learn More"
        googlePlay="Download Mobile"
        appStore="iOS App"
      />
      <RightSection
        content={<APISection />}
        productName="Developer API"
        productDescription="Build powerful trading applications and experiences with our comprehensive REST and WebSocket APIs. Perfect for fintech startups and traders building custom solutions."
        learnMore="API Documentation"
      />
      <LeftSection
        content={<LearningSection />}
        productName="Learning Hub"
        productDescription="Comprehensive trading education courses with in-depth coverage of technical analysis, fundamental analysis, and trading psychology. Learn at your own pace with bite-sized lessons and interactive modules."
        tryDemo="Start Learning"
        learnMore="Explore Courses"
        googlePlay="Download Mobile"
        appStore="iOS App"
      />
      <Universe />
    </>
  );
};


   


export default ProductsPage;
