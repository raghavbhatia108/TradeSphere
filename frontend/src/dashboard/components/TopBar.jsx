import React from "react";
import Menu from "./Menu"; 

const TopBar = ()=>{
    return(
        <div className="topbar-container">
            <div className="indices-container">
                <div className="index-block">
                    <p className="index">S&P 500</p>
                    <p className="index-points">5,250.10</p>
                    <p className="change positive">+0.47%</p>
                </div>
                <div className="index-block">
                    <p className="index">NASDAQ</p>
                    <p className="index-points">18,074.63</p>
                    <p className="change positive">+0.63%</p>
                </div>
            </div>
            <Menu/>
        </div>
    );
}

export default TopBar;