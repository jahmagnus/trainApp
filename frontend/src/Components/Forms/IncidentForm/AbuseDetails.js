import React from "react";

//submit button import
import Submit from "../FormComponents/SubmitButton";

//import css
import "./IncidentForm.css";

const AbuseDetails = ({ prevPage, nextPage, values, isChecked, handleChecked }) => {
  const PrevButtonStyle = {
    marginRight: "2rem",
  };

  const NextButtonStyle = {
    marginLeft: "2rem",
  };

 

  return (
    <div className="container general-container">
      <label>Please describe the type of abuse</label>
      <div className="inline field checkbox-field">
        <div className="ui checkbox ui-checkbox">
          <input type="checkbox" tabIndex="0" value="foul language" onChange={() => handleChecked(0)} checked={isChecked[0]}/>
          <label>Foul or abusive language</label>
        </div>
        <div className="ui checkbox ui-checkbox">
          <input type="checkbox" tabIndex="1" value="personal intimidation" onChange={() => handleChecked(1)} checked={isChecked[1]} />
          <label>Personal insults/intimidating behaviour</label>
        </div>
        <div className="ui checkbox ui-checkbox">
          <input type="checkbox" tabIndex="2" value="Threatening behaviour" onChange={() => handleChecked(2)} checked={isChecked[2]}/>
          <label>Threatening behaviour</label>
        </div>
        <div className="ui checkbox ui-checkbox">
          <input type="checkbox" tabIndex="3" value="multiple offender abuse" onChange={() => handleChecked(3)} checked={isChecked[3]}/>
          <label>Multiple abuse by multiple people</label>
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
};

export default AbuseDetails;
