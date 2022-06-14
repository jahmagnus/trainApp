import React from "react";

//css
import "./IncidentForm.css";

//component imports
import Submit from "../FormComponents/SubmitButton";

const PersonsDetails = ({ handleChange, nextPage, prevPage }) => {
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
          />
        </div>

        <div className="field">
          <label>Surname</label>
          <input
            type="text"
            name="surname"
            onChange={handleChange("surname")}
          />
        </div>

        <div className="field">
          <label>Job Title</label>
          <input type="text" name="job" onChange={handleChange("job")} />
        </div>

        <div className="field">
          <label>Home Depot</label>
          <input type="text" name="depot" onChange={handleChange("home")} />
        </div>

        <div className="field">
          <label>Line Manager's Name</label>
          <input
            type="text"
            name="manager"
            onChange={handleChange("manager")}
          />
        </div>

        {/* radio button */}

        <div class="inline fields">
          <label for="offWork">Did incident cause absence from work?</label>
          <div class="field">
            <div class="ui radio checkbox">
              <input
                type="radio"
                name="offWork"
                tabIndex="0"
                class=""
                value="yes"
                onChange={handleChange('absence')}
              />
              <label>Yes</label>
            </div>
          </div>

          <div class="field">
            <div class="ui radio checkbox">
              <input
                type="radio"
                name="offWork"
                tabIndex="0"
                class=""
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

export default PersonsDetails;
