import React from "react";

const Button = ({ buttonState }) => {
  const buttonStyle={
    marginRight: "2rem"
  }

  return (
    <button style={buttonStyle} className={`ui ${buttonState} left labeled icon button`}>
      <i class="left arrow icon"></i>
      back
    </button>
  );
};

export default Button;
