import React, {useState, useEffect} from "react";
import axios from "axios";
import { getToken } from "../../utils/auth";

const Orders = ()=>{
    const [allOrders, setAllOrders] = useState([]);
    useEffect(()=>{
        const token = getToken();
        axios.get(`${process.env.REACT_APP_API_URL}/allOrders`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then((res)=>{
            console.log(res.data);
            setAllOrders(res.data);
        })
        .catch((err)=>{
            console.error(err.response?.data?.message || err.message);
        });
    }, []);
    return (
        <div className="orders">
            {allOrders.length === 0 ? (
                <div className="no-orders">
                    <p>You have not placed any orders yet</p>
                    <Link to={"/"} className="btn">
                        Get Started
                    </Link>
                </div>
            ) : (
                <div className="order-table">
                    <table>
                        <tr>
                            <th>Name</th>
                            <th>Qty.</th>
                            <th>Price</th>
                            <th>Mode</th>
                        </tr>
                        {allOrders.map((order, index)=>(
                            <tr key={index}>
                                <td>{order.name}</td>
                                <td>{order.qty}</td>
                                <td>{order.price}</td>
                                <td>{order.mode}</td>
                            </tr>
                        ))}
                    </table>
                </div>
            )}
        </div>
    );
};

export default Orders;