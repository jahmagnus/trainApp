import React from "react";

//css
import "./IncidentForm.css";

//component imports
import Submit from "../FormComponents/SubmitButton";

const PoliceDetails = ({ handleChange, nextPage, prevPage, values }) => {
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
          <label>First Name</label>
          <input
            type="text"
            name="firstname"
            onChange={handleChange("firstName")}
            value={values.firstName}
          />
        </div>

        <div className="field">
          <label>Surname</label>
          <input
            type="text"
            name="surname"
            onChange={handleChange("surname")}
            value={values.surname}
          />
        </div>

        <div className="field">
          <label>Job Title</label>
          <input type="text" name="job" onChange={handleChange("job")}
          value={values.jobTitle} />
        </div>

        <div className="field">
          <label>Home Depot</label>
          <input type="text" name="depot" onChange={handleChange("home")}
          value={values.homeDepot} />
          
        </div>

        <div className="field">
          <label>Line Manager's Name</label>
          <input
            type="text"
            name="manager"
            onChange={handleChange("manager")}
            value={values.managerName}
          />
        </div>

        {/* radio button */}

        <div className="inline fields">
          <label htmlFor="offWork">Did incident cause absence from work?</label>
          <div className="field">
            <div className="ui radio checkbox">
              <input
                type="radio"
                name="offWork"
                tabIndex="0"
                className=""
                value="yes"
                onChange={handleChange('absence')}
              />
              <label>Yes</label>
            </div>
          </div>

          <div className="field">
            <div className="ui radio checkbox">
              <input
                type="radio"
                name="offWork"
                tabIndex="0"
                className=""
                value="no"
                onChange={handleChange('absence')}
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
          <div className="row">
            <Submit />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoliceDetails;
