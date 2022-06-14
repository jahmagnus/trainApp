import React from "react";

//css
import "./IncidentForm.css";

//component imports
import Submit from "../FormComponents/SubmitButton";

const TrainDetails = ({ handleChange, nextPage, prevPage }) => {
  const PrevButtonStyle = {
    marginRight: "2rem",
  };

  const NextButtonStyle = {
    marginLeft: "2rem",
  };

  return (
    <div>
      <div className="container general-container">
        <div className="field">
          <label>Train Head code</label>
          <input
            type="text"
            name="headcode"
            onChange={handleChange("headcode")}
          />
        </div>

        <div className="field">
          <label>Destination</label>
          <input
            type="text"
            name="destination"
            onChange={handleChange("destination")}
          />
        </div>

        <div className="field">
          <label>Origin</label>
          <input type="text" name="origin" onChange={handleChange("origin")} />
        </div>
          <div className="row button-row">
            <div className="row">
              <button
                onClick={prevPage}
                style={PrevButtonStyle}
                className={`ui left labeled icon button`}
              >
                <i class="left arrow icon"></i>
                Back
              </button>

              <button
                onClick={nextPage}
                style={NextButtonStyle}
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
      </div>
    
  );
};

export default TrainDetails;
