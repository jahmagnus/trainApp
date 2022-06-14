import React from "react";

const Button = ({ buttonState }) => {

  const buttonStyle={
    marginLeft: "2rem"
  }


  return (
    <button style={buttonStyle} className={`ui ${buttonState} right labeled icon button`}>
      <i className="right arrow icon"></i>
      Next
    </button>
  );
};

export default Button;
