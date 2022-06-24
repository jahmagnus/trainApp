import React, { useState, useEffect } from "react";

const Button = () => {
  const buttonStyle = {
    marginTop: "2rem",
    height: "3rem",
    width: "22rem",
  };

  return (
    <button style={buttonStyle} className={`ui primary button`}>
      Submit
    </button>
  );
};

export default Button;
