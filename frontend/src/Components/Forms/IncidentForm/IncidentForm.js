import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

//css
import "./IncidentForm.css";

//component imports
import GeneralSection from "./GeneralSection";
import Escape from "../../Escape/EscapeHome";

const IncidentForm = ({ user }) => {
  //state items
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const handleTime = (e) => {
    setTime(e.target.value);
  };

  const handleLocation = (e) => {
    setLocation(e.target.value);
  };

  const handleChange = (field) => (e) => {
    switch (field) {
      case "date":
        setDate(e.target.value);
        break;
      case "time":
        setTime(e.target.value);
        break;
      case "location":
        setLocation(e.target.value);
        break;
      default:
        break;
    }
  };

  //check to see if user data matches the user stored in local storage
  const storageData = localStorage.getItem("user");
  const parseUser = JSON.parse(storageData);
  if (parseUser == null) {
    console.log("protected page, please login", user);
    return <Navigate to="/" replace />;
  }

  return (
    <div className="ui centered grid">
      <div className="twelve wide column">
        <Escape />
        <form className="ui inverted form form-container">
          <GeneralSection handleChange={handleChange} />
        </form>
      </div>
    </div>
  );
};

export default IncidentForm;
