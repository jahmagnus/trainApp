import React from "react";

//css
import "./IncidentForm.css";

//component imports
import Submit from "../FormComponents/SubmitButton";
import NextButton from "../FormComponents/NextButton";

function Comments({ nextPage, prevPage, handleChange, values, pageNum }) {
  const PrevButtonStyle = {
    marginRight: "2rem",
  };

  return (
    <div>
      <div className="container general-container">
        <h4 className="ui header">Page: {pageNum}/8</h4>
        <div className="field">
          <label>Please give a brief account of the events</label>
          <textarea
            value={values.comment}
            onChange={handleChange("comment")}
          ></textarea>
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

          <NextButton buttonState="disabled" />
        </div>
        <div className="row">
          <Submit />
        </div>
      </div>
    </div>
  );
}

export default Comments;
