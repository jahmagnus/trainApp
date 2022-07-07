import React from "react";

//remove value comes from Contributory factors - component drilling
function Label({ content, removeValue }) {
  const labelStyle = {
    margin: "0.25rem",
  };

  const deleteStyle = {
    marginRight: ".3rem",
  };

  return (
    <a
      className="ui label"
      style={labelStyle}
      onClick={() => removeValue(content)}
    >
      <i className="delete icon icon" style={deleteStyle}>
        {" "}
      </i>
      {content}
    </a>
  );
}

export default Label;
