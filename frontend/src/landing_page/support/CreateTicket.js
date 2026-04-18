import React from "react";

const CreateTicket = () => {
  return (
    <div className="container">
      <h1 className="fs-3">To create a ticket, select a relevant topic</h1>
      <div className="row mt-5">
        <div className="col">
          <h1 className="fs-5 mb-5">
            <i class="fa-solid fa-circle-plus" style={{paddingRight:'10px'}}></i>Account Opening
          </h1>
          <a href="" style={{textDecoration:"none" , lineHeight:'2'}}>Online Account Registration</a>
          <br />
          <a href="" style={{textDecoration:"none" , lineHeight:'2'}}>Offline Account Registration</a>
          <br />
          <a href="" style={{textDecoration:"none" , lineHeight:'2'}}>Business Account Setup</a>
          <br />
          <a href="" style={{textDecoration:"none" , lineHeight:'2'}}>International Account Registration</a>
          <br />
          <a href="" style={{textDecoration:"none" , lineHeight:'2'}}>Pricing & Fees</a>
          <br />
          <a href="" style={{textDecoration:"none" , lineHeight:'2'}}>TradeSphere Premium Account</a>
          <br />
          <a href="" style={{textDecoration:"none" , lineHeight:'2'}}>Getting Started Guide</a>
          <br />
        </div>
        <div className="col">
          <h1 className="fs-5 mb-5">
            <i class="fa-solid fa-user" style={{paddingRight:'10px'}}></i>Your TradeSphere Account
          </h1>
          <a href="" style={{textDecoration:"none" , lineHeight:'2'}}>Login & Security</a>
          <br />
          <a href="" style={{textDecoration:"none" , lineHeight:'2'}}>Account Settings & Preferences</a>
          <br />
          <a href="" style={{textDecoration:"none" , lineHeight:'2'}}>Wallet & Bank Details</a>
          <br />
          <a href="" style={{textDecoration:"none" , lineHeight:'2'}}>Profile Management</a>
          <br />
          <a href="" style={{textDecoration:"none" , lineHeight:'2'}}>Transfer & Asset Management</a>
          <br />
        </div>
        <div className="col">
          <h1 className="fs-5 mb-5">
            <i class="fa-solid fa-chart-column" style={{paddingRight:'10px'}}></i>Trading & Tools
          </h1>
          <a href="" style={{textDecoration:"none" , lineHeight:'2'}}>Margin/Leverage & Products</a><br />
          <a href="" style={{textDecoration:"none" , lineHeight:'2'}}>TradeSphere Terminal</a><br />
          <a href="" style={{textDecoration:"none" , lineHeight:'2'}}>Trading FAQs</a><br />
          <a href="" style={{textDecoration:"none" , lineHeight:'2'}}>Corporate Actions</a><br />
          <a href="" style={{textDecoration:"none" , lineHeight:'2'}}>Risk Management Tools</a><br />
          <a href="" style={{textDecoration:"none" , lineHeight:'2'}}>API Documentation</a><br />
          <a href="" style={{textDecoration:"none" , lineHeight:'2'}}>Advanced Analytics</a><br />
          <a href="" style={{textDecoration:"none" , lineHeight:'2'}}>Market Insights</a><br />
          <a href="" style={{textDecoration:"none" , lineHeight:'2'}}>Price Alerts & Automation</a><br />
        </div>
      </div>

      <div className="row mt-5">
        <div className="col">
          <h1 className="fs-5 mb-5">
          <i class="fa-solid fa-credit-card" style={{paddingRight:'10px'}}></i>Wallet & Payments
          </h1>
          <a href="" style={{textDecoration:"none" , lineHeight:'2'}}>Deposit Funds</a>
          <br />
          <a href="" style={{textDecoration:"none" , lineHeight:'2'}}>Withdraw Funds</a>
          <br />
          <a href="" style={{textDecoration:"none" , lineHeight:'2'}}>Payment Methods</a>
          <br />
          <a href="" style={{textDecoration:"none" , lineHeight:'2'}}>Bank Account Management</a>
        </div>
        <div className="col">
          <h1 className="fs-5 mb-5">
          <i class="fa-solid fa-c" style={{paddingRight:'10px'}}></i>Portfolio Manager
          </h1>
          <a href="" style={{textDecoration:"none" , lineHeight:'2'}}>Trade Reports</a>
          <br />
          <a href="" style={{textDecoration:"none" , lineHeight:'2'}}>Account Ledger</a>
          <br />
          <a href="" style={{textDecoration:"none" , lineHeight:'2'}}>Portfolio Analytics</a>
          <br />
          <a href="" style={{textDecoration:"none" , lineHeight:'2'}}>Performance Tracking</a>
          <br />
        </div>
        <div className="col">
          <h1 className="fs-5 mb-5">
          <i class="fa-regular fa-circle" style={{paddingRight:'10px'}}></i>Investment Hub
          </h1>
          <a href="" style={{textDecoration:"none" , lineHeight:'2'}}>Fund Investing Basics</a><br />
          <a href="" style={{textDecoration:"none" , lineHeight:'2'}}>About Investment Hub</a><br />
          <a href="" style={{textDecoration:"none" , lineHeight:'2'}}>Selecting & Investing in Funds</a><br />
          <a href="" style={{textDecoration:"none" , lineHeight:'2'}}>Automatic Investment Plans</a><br />
        </div>
      </div>
    </div>
  );
};

export default CreateTicket;
