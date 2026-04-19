import React from 'react'
import './OpenAccount.css'
import { Link } from 'react-router-dom'

const OpenAccount = () => {
  const token = localStorage.getItem("token");
  return (
    <section className="open-account-section">
      <div className="open-account-container">
        <h1>Ready to Start Trading?</h1>
        <p>Join thousands of traders using TradeSphere for smart, efficient trading</p>
           <Link to="/signup" className="signup-btn">Create Free Account</Link>
      </div>
    </section>
  )
}

export default OpenAccount