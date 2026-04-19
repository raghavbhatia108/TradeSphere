import React, {useState, useEffect} from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";
import { getToken } from "../../utils/auth";
// import { holdings } from "../data/data";


const Holdings = ()=>{
    const [allHoldings, setAllHoldings] = useState([]);
    useEffect(()=>{
        const token = getToken();
        axios.get(`${process.env.REACT_APP_API_URL}/allHoldings`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then((res)=>{
            console.log(res.data);
            setAllHoldings(res.data);
        })
        .catch((err)=>{
            console.error(err.response?.data?.message || err.message);
        });
    },[])

    const labels = allHoldings.map((subArray)=>subArray["name"]);
    const data = {
  labels,
  datasets: [
    {
      label: 'Stock Name',
      data: allHoldings.map((stock) => stock.price),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
]};


    // export const data = {
//   labels,
//   datasets: [
//     {
//       label: 'Dataset 1',
//       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//       backgroundColor: 'rgba(255, 99, 132, 0.5)',
//     },
//     {
//       label: 'Dataset 2',
//       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//       backgroundColor: 'rgba(53, 162, 235, 0.5)',
//     },
//   ],
// };
    return(
        <>
        <h3 className="title">Positions({allHoldings.length})</h3>
        <div className="order-table">
            <table>
            <tr>
                <th>Instrument</th>
                <th>Qty</th>
                <th>Avg. Cost</th>
                <th>LTP</th>
                <th>Current Value</th>
                <th>P&L</th>
                <th>Net Chg.</th>
                <th>Day Chg.</th>
            </tr>
            {allHoldings.map((stock, index)=>{
                const currValue=stock.price*stock.qty;
                const isProfit=currValue - stock.avg*stock.qty>=0.0;
                const profClass=isProfit?"profit":"loss";
                const dayClass=stock.isLoss?"loss":"profit";
                return(
                  <tr key={index}>
                    <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td>{currValue.toFixed(2)}</td>
                <td className={profClass}>{(currValue-stock.avg*stock.qty).toFixed(2)}</td>
                <td className={profClass}>{stock.net}</td>
                <td className={dayClass}>{stock.day}</td>
            </tr>  
                )
            })}
            
            </table>
        </div>

        <div className="row">
            <div className="col">
                <h5>29,875.</h5>
            <span>55</span>{" "}
            <p>Total Investment</p>
            </div>
            <div className="col">
                <h5>31,428.</h5>
                <span>95</span>{" "}
            </div>
            <div className="col">
                <h5>1,553.40(+5.20%)</h5>
                <p>P&L</p>
            </div>
        </div>
        <VerticalGraph data={data}/>
        </>
    )
};

export default Holdings;