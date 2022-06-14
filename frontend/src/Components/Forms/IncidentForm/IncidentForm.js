import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

//css
import "./IncidentForm.css";

//component imports
import GeneralSection from "./GeneralSection";
import Escape from "../../Escape/EscapeHome";

const IncidentForm = ({ user }) => {
  //state items
  const [pageNum, setPageNum] = useState(1);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    console.log(
      "date",
      date,
      "...",
      "time",
      time,
      "....",
      "location",
      location, 

      pageNum
    );
  }, [date, time, location, pageNum]);

  //get details from form and set relevant state
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


  const nextPage = (e) => {
    e.preventDefault();
    setPageNum(pageNum + 1);
    console.log("next page num", pageNum);
  };

  const prevPage = () => {
    setPageNum(pageNum - 1);
    console.log("previous page num", pageNum);
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
          
          <GeneralSection handleChange={handleChange} nextPage={nextPage}/>
        </form>
      </div>
    </div>
  );
};

export default IncidentForm;
