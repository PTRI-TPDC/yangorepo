import React from "react";
import TextField from './TextField';
import FileUploader from './FileUploader';


const ResponsiveDiv = () => {
  return (
    <div className="responsive-div">
      <div className="title">
        <h2>Collection Data</h2>
      </div>
      <div className="textfields">
        <div className="textfield1">
        
        <TextField title="Collection Name" placeholder="Value" />
        </div>

        <div className="textfield2">
        <TextField title="Sex" placeholder="Value" />
        </div>
        
      </div>
      <br></br>
      <div className="textfields">
      <div className="textfield3">
      <TextField title="Designer" placeholder="Value" />
    </div>
        <div className="textfield4">
        <TextField title="Period" placeholder="Value" />
        </div>

      </div>
      <div className="attach-head"> 
      <p> ATTACH PATTERN PIECES</p>
      </div>
      <div className="file-uploader-box">

       
        <FileUploader />
      </div>
      <button className="main-button">Click Me!</button>
    </div>
  );
};

export default ResponsiveDiv;
