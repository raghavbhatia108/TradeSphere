import React from "react";

const linkStyle = { background: "none", border: "none", padding: 0, cursor: "pointer", textDecoration: "none", lineHeight: "2", color: "inherit", display: "inline" };

const CreateTicket = () => {
  return (
    <div className="container">
      <h1 className="fs-3">To create a ticket, select a relevant topic</h1>
      <div className="row mt-5">
        <div className="col">
          <h1 className="fs-5 mb-5">
            <i className="fa-solid fa-circle-plus" style={{paddingRight:'10px'}}></i>Account Opening
          </h1>
          <button type="button" style={linkStyle}>Online Account Registration</button><br />
          <button type="button" style={linkStyle}>Offline Account Registration</button><br />
          <button type="button" style={linkStyle}>Business Account Setup</button><br />
          <button type="button" style={linkStyle}>International Account Registration</button><br />
          <button type="button" style={linkStyle}>Pricing &amp; Fees</button><br />
          <button type="button" style={linkStyle}>TradeSphere Premium Account</button><br />
          <button type="button" style={linkStyle}>Getting Started Guide</button><br />
        </div>
        <div className="col">
          <h1 className="fs-5 mb-5">
            <i className="fa-solid fa-user" style={{paddingRight:'10px'}}></i>Your TradeSphere Account
          </h1>
          <button type="button" style={linkStyle}>Login &amp; Security</button><br />
          <button type="button" style={linkStyle}>Account Settings &amp; Preferences</button><br />
          <button type="button" style={linkStyle}>Wallet &amp; Bank Details</button><br />
          <button type="button" style={linkStyle}>Profile Management</button><br />
          <button type="button" style={linkStyle}>Transfer &amp; Asset Management</button><br />
        </div>
        <div className="col">
          <h1 className="fs-5 mb-5">
            <i className="fa-solid fa-chart-column" style={{paddingRight:'10px'}}></i>Trading &amp; Tools
          </h1>
          <button type="button" style={linkStyle}>Margin/Leverage &amp; Products</button><br />
          <button type="button" style={linkStyle}>TradeSphere Terminal</button><br />
          <button type="button" style={linkStyle}>Trading FAQs</button><br />
          <button type="button" style={linkStyle}>Corporate Actions</button><br />
          <button type="button" style={linkStyle}>Risk Management Tools</button><br />
          <button type="button" style={linkStyle}>API Documentation</button><br />
          <button type="button" style={linkStyle}>Advanced Analytics</button><br />
          <button type="button" style={linkStyle}>Market Insights</button><br />
          <button type="button" style={linkStyle}>Price Alerts &amp; Automation</button><br />
        </div>
      </div>

      <div className="row mt-5">
        <div className="col">
          <h1 className="fs-5 mb-5">
            <i className="fa-solid fa-credit-card" style={{paddingRight:'10px'}}></i>Wallet &amp; Payments
          </h1>
          <button type="button" style={linkStyle}>Deposit Funds</button><br />
          <button type="button" style={linkStyle}>Withdraw Funds</button><br />
          <button type="button" style={linkStyle}>Payment Methods</button><br />
          <button type="button" style={linkStyle}>Bank Account Management</button><br />
        </div>
        <div className="col">
          <h1 className="fs-5 mb-5">
            <i className="fa-solid fa-c" style={{paddingRight:'10px'}}></i>Portfolio Manager
          </h1>
          <button type="button" style={linkStyle}>Trade Reports</button><br />
          <button type="button" style={linkStyle}>Account Ledger</button><br />
          <button type="button" style={linkStyle}>Portfolio Analytics</button><br />
          <button type="button" style={linkStyle}>Performance Tracking</button><br />
        </div>
        <div className="col">
          <h1 className="fs-5 mb-5">
            <i className="fa-regular fa-circle" style={{paddingRight:'10px'}}></i>Investment Hub
          </h1>
          <button type="button" style={linkStyle}>Fund Investing Basics</button><br />
          <button type="button" style={linkStyle}>About Investment Hub</button><br />
          <button type="button" style={linkStyle}>Selecting &amp; Investing in Funds</button><br />
          <button type="button" style={linkStyle}>Automatic Investment Plans</button><br />
        </div>
      </div>
    </div>
  );
};

export default CreateTicket;
