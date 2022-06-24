import React from "react";

//css
import "./IncidentForm.css";

//component imports
import Submit from "../FormComponents/SubmitButton";

const TrainDetails = ({ handleChange, nextPage, prevPage, values, pageNum }) => {
  <h4 className="ui header">Page: {pageNum}/8</h4>
  const PrevButtonStyle = {
    marginRight: "2rem",
  };

  const NextButtonStyle = {
    marginLeft: "2rem",
  };

  return (
    <div>
      <div className="container general-container">
      <h4 className="ui header">Page: {pageNum}/8</h4>
        <div className="field">
          <label>Train Head code</label>
          <input
            type="text"
            name="headcode"
            onChange={handleChange("headcode")}
            value={values.headcode}
          />
        </div>

        <div className="field">
          <label>Destination</label>
          <input
            type="text"
            name="destination"
            onChange={handleChange("destination")}
            value={values.destination}
          />
        </div>

        <div className="field">
          <label>Origin</label>
          <input
            type="text"
            name="origin"
            onChange={handleChange("origin")}
            value={values.origin}
          />
        </div>
        <div className="row button-row">
          <div className="row">
            <button
              onClick={prevPage}
              style={PrevButtonStyle}
              className={`ui left labeled icon button`}
            >
              <i className="left arrow icon"></i>
              Back
            </button>

            <button
              onClick={nextPage}
              style={NextButtonStyle}
              className={`ui right labeled icon button`}
            >
              <i className="right arrow icon"></i>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainDetails;
