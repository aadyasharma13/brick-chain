import React from "react";
import "./GetStarted.css";
const GetStarted = () => {
  return (
    <div id="get-started" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Connect Your Wallet</span>
          <span className="secondaryText">
            Connect Your wallet to get Started. 
            Click here.
            <br />
          
          </span>
          <button className="button" href>
            <a href="mailto:zainkeepscode@gmail.com">Wallet</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
