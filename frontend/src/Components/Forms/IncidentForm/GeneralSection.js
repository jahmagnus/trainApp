import React from "react";

//component import
import Prev from "../FormComponents/PrevButton";
import Submit from "../FormComponents/SubmitButton";

const GeneralSection = ({ handleChange, nextPage, values, pageNum }) => {
  const buttonStyle = {
    marginLeft: "2rem",
  };

  return (
    <div className="container general-container">
      <h4 className="ui header">Page: {pageNum}/8</h4>
      <div className="field">
        <label>Date</label>
        <input
          type="date"
          name="date-time"
          onChange={handleChange("date")}
          value={values.date}
        />
      </div>

      <div className="field">
        <label>Time</label>
        <input
          type="time"
          name="time-date"
          onChange={handleChange("time")}
          value={values.time}
        />
      </div>

      <div className="field">
        <label>Location</label>
        <input
          type="text"
          name="location"
          onChange={handleChange("location")}
          value={values.location}
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
            <i className="right arrow icon"></i>
            Next
          </button>
        </div>
        <div className="row">
        
        </div>
      </div>
    </div>
  );
};

export default GeneralSection;
