import React, { useState } from "react";

//component import

import Prev from "../FormComponents/PrevButton";
import Next from "../FormComponents/NextButton";
import Submit from "../FormComponents/SubmitButton";

const GeneralSection = ({ handleChange, nextPage }) => {

  const buttonStyle = {
    marginLeft: "2rem",
  };

  return (
    <div className="container general-container">
      <div className="field">
        <label>Date</label>
        <input type="date" name="date-time" onChange={handleChange("date")} />
      </div>

      <div className="field">
        <label>Time</label>
        <input type="time" name="time-date" onChange={handleChange("time")} />
      </div>

      <div className="field">
        <label>Location</label>
        <input
          type="text"
          name="location"
          onChange={handleChange("location")}
        />
      </div>

      <div className="row button-row">
        <div className="row">
          <Prev buttonState="disabled" />

          <button
            onClick={nextPage}
            style={buttonStyle}
            className={`ui right labeled icon button`}
          >
            <i class="right arrow icon"></i>
            Next
          </button>
        </div>
        <div className="row">
          <Submit />
        </div>
      </div>
    </div>
  );
};

export default GeneralSection;
