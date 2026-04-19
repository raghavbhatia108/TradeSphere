import React from "react";

const Summary = () => {
  return (
    <>
      <div className="username">
        <h6>Hi, User!</h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Portfolio Value</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>$3.74K</h3>
            <p>Available Balance</p>
          </div>
<hr />
          <div className="second">
            <p>
              Used margin <span>0</span>
            </p>
            <p>
              Opening Balance <span>$3.74K</span>
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Positions (13)</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className="profit">
              $1.55K <small>+5.20%</small>
            </h3>
            <p>P&L</p>
          </div>
<hr />
          <div className="second">
            <p>
              Current Value <span>$31.43K</span>
            </p>
            <p>
              Total Invested <span>$29.88K</span>
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;