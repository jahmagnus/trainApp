import React from "react";

//css
import "./IncidentForm.css";

//component imports
import Submit from "../FormComponents/SubmitButton";

function ReportingPerson({ handleChange, values, nextPage, prevPage }) {
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
          <label>Reporter First Name</label>
          <input
            type="text"
            name="reporter-firstname"
            onChange={handleChange("reporterFirstName")}
            value={values.reporterFirstName}
          />
        </div>

        <div className="field">
          <label>Reporter Surname</label>
          <input
            type="text"
            name="reporter-surname"
            onChange={handleChange("reporterSurname")}
            value={values.reporterSurname}
          />
        </div>

        <div className="field">
          <label>Reporter Job Title</label>
          <input
            type="text"
            name="reporter-job"
            onChange={handleChange("reporterJob")}
            value={values.reporterJob}
          />
        </div>

        <div className="field">
          <label>Reporter Home Depot</label>
          <input
            type="text"
            name="reporter-depot"
            onChange={handleChange("reporterLocation")}
            value={values.reporterHomeLocation}
          />
        </div>

        <div className="field">
          <label>Line Manager's Name</label>
          <input
            type="text"
            name="manager"
            onChange={handleChange("reporterManager")}
            value={values.reporterManagerName}
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
          <div className="row">
            <Submit />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReportingPerson;
