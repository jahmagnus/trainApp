import React from "react";

const RadioButton = () => {
  return (
    <div className="inline fields">
      <label for="fruit"></label>
      <div className="field">
        <div className="ui radio checkbox">
          <input
            type="radio"
            name="fruit"
            checked=""
            tabindex="0"
            className="hidden"
          />
          <label>Apples</label>
        </div>
      </div>
      <div className="field">
        <div className="ui radio checkbox">
          <input type="radio" name="fruit" tabindex="0" className="hidden" />
          <label>Oranges</label>
        </div>
      </div>
    </div>
  );
};

export default RadioButton;
