
//           </fieldset>
//           <fieldset>
//             <legend>price</legend>
//             <input
//               type="number"
//               name="price"
//               id="price"
//               onChange={(e) => setStockPrice(e.target.value)}
//               value={stockPrice}
//             />
//           </fieldset>
//         </div>
//       </div>
//       <div className="buttons">
//         <span>Margin required ₹140.65</span>
//         <div>
//             <Link className="btn btn-blue" onClick={handleBuyClick}>Buy</Link>
//             <Link to="" className="btn btn-grey" onClick={handleCancelClick}>Cancel</Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BuyActionWindow;

import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";
import { getToken } from "../../utils/auth";

const BuyActionWindow = ({ uid }) => {
  const { closeBuyWindow } = useContext(GeneralContext);

  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const handleBuyClick = async () => {
    try {
      const token = getToken();
      await axios.post(
        `${process.env.REACT_APP_API_URL}/newOrder`,
        {
          name: uid,
          qty: stockQuantity,
          price: stockPrice,
          mode: "BUY",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      closeBuyWindow();
    } catch (err) {
      console.error("Buy order failed:", err.response?.data?.message || err.message);
    }
  };

  const handleCancelClick = () => {
    closeBuyWindow(); // ✅ FIXED
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(Number(e.target.value))}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              onChange={(e) => setStockPrice(Number(e.target.value))}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>
      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <button className="btn btn-blue" onClick={handleBuyClick}>Buy</button>
          <button className="btn btn-grey" onClick={handleCancelClick}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
