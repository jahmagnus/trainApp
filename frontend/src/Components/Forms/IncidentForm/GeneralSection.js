import React from "react";

//component import
import Field from "../FormComponents/Field";
import Prev from "../FormComponents/PrevButton";
import Next from "../FormComponents/NextButton";
import Submit from "../FormComponents/SubmitButton";

const GeneralSection = ({ handleDate,handleTime, handleLocation, values }) => {

  return (
    <div className="container general-container">
      <Field label="Date" type="date" name="date-time" onChange={handleDate}/>
      <Field label="Time" type="time" name="time-date" onChange={handleTime}/>
      <Field label="Location" type="text" name="location" onChange={() => console.log('thing')}/>

      <div className="row button-row">
        <div className="row">
          <Prev buttonState="disabled" />
          <Next buttonState="" />
        </div>
        <div className="row">
          <Submit/>
        </div>
      </div>
    </div>
  );
};

export default GeneralSection;
