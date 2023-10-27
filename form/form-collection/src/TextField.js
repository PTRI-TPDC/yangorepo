import React from "react";
import "./App.css";

const Textfield = ({ placeholder ,title}) => {
    return(
        <div className="group">
          <input className="input" type="text" placeholder={placeholder} />
          <label className="label">{title}</label>
          <div className="bar">
            <div className="highlight"></div>
          </div>
        </div>
  );
};

export default Textfield;
