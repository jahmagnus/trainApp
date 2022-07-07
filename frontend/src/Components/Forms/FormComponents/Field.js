import React from "react";

const Field = ({ label, type, name }) => {
  return (
    <div className="field">
      <label>{label}</label>
      <input type={type} name={name} />
    </div>
  );
};

export default Field;
