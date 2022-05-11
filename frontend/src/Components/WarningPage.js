import React from "react";

const WarningPage = () => {


  const warningStyle = {
    marginBottom: '10rem',
    marginTop: '5rem'
  }
  return (
    <div className="ui negative message" style={warningStyle}>
      <div className="header">There are no direct services for these stations</div>
      <p>This departure board only shows departures for the next 2 hours, there may be services later in the day</p>
    </div>
  );
};

export default WarningPage;
