import React from "react";

const RadioButton = () => {
  return (

    // used passed props to generate the values for the radio boxes, including the size of the inputs
    <div className="grouped fields">
      <div className="field">
        <div className="ui radio checkbox">
          <input type="radio" name="fruit" tabindex="0" className="hidden" />
          
          <label></label>
        </div>
      </div>
    </div>
  );
};

export default RadioButton;
