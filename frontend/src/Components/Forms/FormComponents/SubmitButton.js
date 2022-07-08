import React from "react";

const Button = ({ handleSubmit }) => {
  const buttonStyle = {
    marginTop: "2rem",
    height: "3rem",
    width: "22rem",
  };

  return (
    <button
      style={buttonStyle}
      className={`ui primary button`}
      onClick={handleSubmit}
    >
      Submit
    </button>
  );
};

export default Button;
