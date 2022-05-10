import React from "react";

const WarningPage = () => {
  return (
    <div className="ui negative message">
      <i className="close icon"></i>
      <div className="header">There are no direct services for these stations</div>
      <p>This departure board only shows departures for the next 2 hours, there may be services later in the day</p>
    </div>
  );
};

export default WarningPage;
