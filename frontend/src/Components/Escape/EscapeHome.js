import React from "react";
import { Link } from "react-router-dom";
import "./buttonstyle.css";

const EscapeHome = () => {
  return (
    <div>
      <Link to="/home">
        <button className="ui inverted green button escape">
          <i className="arrow alternate circle left outline icon" />
          Home
        </button>
      </Link>
    </div>
  );
};

export default EscapeHome;
