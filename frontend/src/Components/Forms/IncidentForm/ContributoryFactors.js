import React from "react";

//submit button import
import Submit from "../FormComponents/SubmitButton";

//import css
import "./IncidentForm.css";

const dropdownValues = [
  {label: "Under the influence of drugs/alcohol", value: "drugs/alcohol"},
  {label: "Ticket irregularity", value: "ticket irreularity"},
  {label: "Electronic equipment noise", value: "electronic equipment"},
  {label: "Passenger to late to join train", value: "passenger late to train"},
  {label: "Luggage obstruction", value: "luggage obstruction"},
  {label: "Anti-social behaviour - malicious/threatening", value: "ASB"},
  {label: "Football supporter anti social behaviour", value: "football ASB"},
  {label: "Group travel - stag/hen party", value: "group travel"},
  {label: "Smoking", value: "smoking"},
  {label: "Involved in passenger disupute", value: "passenger dispute"},
  {label: "Train running disruption", value: "train disruption"},
  {label: "Equipment failure", value: "equipment failure"},
  {label: "Reservation failure", value: "reservation failure"},
  {label: "Reduced catering offering", value: "catering offering"},
  {label: "Station issues", value: "station issues"},
  {label: "Unknown", value: "unknown"},
]

const ContributoryFactors = ({ prevPage, nextPage, values }) => {
  const PrevButtonStyle = {
    marginRight: "2rem",
  };

  const NextButtonStyle = {
    marginLeft: "2rem",
  };

  return (
    <div className="container general-container">
      <div className="field">
        <label>Contributing Factors</label>
        <select multiple="" className="ui dropdown" />
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
  );
};

export default ContributoryFactors;
