import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

//css
import "./IncidentForm.css";

//component imports
import GeneralSection from "./GeneralSection";
import Escape from "../../Escape/EscapeHome";

const IncidentForm = ({ user }) => {
  //state items for general section inputs
  const [pageNum, setPageNum] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");

  useEffect(()=> {
      console.log(date, time, location)
  }, [date, time, location])

  //different types of state to be handled
  const values = {date, time, location};
  //check to see if user data matches the user stored in local storage
  const storageData = localStorage.getItem("user");
  const parseUser = JSON.parse(storageData);
  if (parseUser == null) {
    console.log("protected page, please login", user);
    return <Navigate to="/" replace />;
  }

 

  //handle the change of inputs
  const handleDate = (e) => {
    setDate(e.target.value)
  }

  const handleTime = (e) => {
    setTime(e.target.value)
  }

  const handleLocation = (e) => {
    setLocation(e.target.value)
  }
  


  return (
    <div className="ui centered grid">
      <div className="twelve wide column">
        <Escape />
        <form className="ui inverted form form-container">
          <GeneralSection handleTime={handleTime} handleDate ={handleDate} handleLocation={handleLocation} values={values}/>
        </form>
      </div>
    </div>
  );
};

export default IncidentForm;
