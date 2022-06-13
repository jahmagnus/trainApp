import React from "react";

//component import
import Field from "../FormComponents/Field";
import Prev from "../FormComponents/PrevButton";
import Next from "../FormComponents/NextButton";
import Submit from "../FormComponents/SubmitButton";

const GeneralSection = () => {
  return (
      <div className="container general-container">
    
      <Field label="Date" type="date" name="date-time" />
      <Field label="Time" type="time" name="time-date" />
      <Field label="Location" type="text" name="location" />
    
    
        <div className="row button-row">
        <div className="row"><Prev/><Next/></div>
        <div className="row"><Submit/></div>     
      
      </div>
    </div>
    
  );
};

export default GeneralSection;


