import React from "react";

const Dropdown = () => {
  return (
    <div className="field">
      <label>items</label>
      <div className="ui fluid search selection dropdown">
        <input type="hidden" name="country" />
        <i className="dropdown icon"></i>
        <div className="default text">Select Country</div>
        <div className="menu">
          <div className="item" data-value="af">
            option 1
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
