import React from "react";

//component import
import Field from "../FormComponents/Field";
import Prev from "../FormComponents/PrevButton";
import Next from "../FormComponents/NextButton";
import Submit from "../FormComponents/SubmitButton";

const GeneralSection = ({ handleDate,handleTime, handleLocation, values }) => {

  return (
    <div className="container general-container">
      <Field label="Date" type="date" name="date-time" value={values.date} onChange={handleDate}/>
      <Field label="Time" type="time" name="time-date" value = {values.time} onChange={handleTime}/>
      <Field label="Location" type="text" name="location" value = {values.location} onChange={handleLocation}/>

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
