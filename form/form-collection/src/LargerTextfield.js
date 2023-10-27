import React from "react";
import "./App.css";

const LargerTextfield = ({ placeholder ,title}) => {
    return(
        <div className="group">
          <input className="inputLarger" type="text" placeholder={placeholder} />
          <label className="labelLarger">{title}</label>
          <div className="barLarger">
            <div className="highlight"></div>
          </div>
        </div>
  );
};

export default LargerTextfield;
