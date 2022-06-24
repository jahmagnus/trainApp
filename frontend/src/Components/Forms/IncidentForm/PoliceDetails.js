import React from "react";

//css
import "./IncidentForm.css";

//component imports
import Submit from "../FormComponents/SubmitButton";

const PoliceDetails = ({
  handleChange,
  nextPage,
  prevPage,
  values,
  pageNum,
}) => {
  const PrevButtonStyle = {
    marginRight: "2rem",
  };

  const NextButtonStyle = {
    marginLeft: "2rem",
  };

  return (
    <div>
      <div className="container general-container">
        {/* radio buttons */}
        <h4 className="ui header">Page: {pageNum}/8</h4>

        <div className="inline fields">
          <label htmlFor="police-report">
            Was incident reported to the British Transport Police?
          </label>
          <div className="field">
            <div className="ui radio checkbox">
              <input
                type="radio"
                name="police-report"
                tabIndex="0"
                className=""
                value="yes"
                onChange={handleChange("reported")}
              />
              <label>Yes</label>
            </div>
          </div>

          <div className="field">
            <div className="ui radio checkbox">
              <input
                type="radio"
                name="police-report"
                tabIndex="0"
                className=""
                value="no"
                onChange={handleChange("reported")}
              />
              <label>No</label>
            </div>
          </div>
        </div>

        <div className="inline fields">
          <label htmlFor="police-attend">
            Did British Transport Police attend the incident?
          </label>
          <div className="field">
            <div className="ui radio checkbox">
              <input
                type="radio"
                name="police-attend"
                tabIndex="0"
                className=""
                value="yes"
                onChange={handleChange("attended")}
              />
              <label>Yes</label>
            </div>
          </div>

          <div className="field">
            <div className="ui radio checkbox">
              <input
                type="radio"
                name="police-attend"
                tabIndex="0"
                className=""
                value="no"
                onChange={handleChange("attended")}
              />
              <label>No</label>
            </div>
          </div>
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

export default PoliceDetails;
