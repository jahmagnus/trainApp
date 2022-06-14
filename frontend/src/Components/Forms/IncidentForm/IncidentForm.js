import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

//css
import "./IncidentForm.css";

//component imports
import GeneralSection from "./GeneralSection";
import Escape from "../../Escape/EscapeHome";
import TrainDetails from "./TrainDetails";
import PersonsDetails from "./PersonsDetails";
import PoliceDetails from "./PoliceDetails";

const IncidentForm = ({ user }) => {
  //state items
  const [pageNum, setPageNum] = useState(1);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [headcode, setHeadcode] = useState("");
  const [destination, setDestination] = useState("");
  const [origin, setOrigin] = useState("");

  //values to use for form persistence
  const values = {
    pageNum,
    date,
    time,
    location,
    headcode,
    destination,
    origin,
  };

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

      pageNum,

      headcode,

      destination,

      origin
    );
  }, [date, time, location, pageNum, headcode, destination, origin]);

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
      case "headcode":
        setHeadcode(e.target.value);
        break;
      case "destination":
        setDestination(e.target.value);
        break;
      case "origin":
        setOrigin(e.target.value);
        break;
      default:
        break;
    }
  };

  //set page number state addition
  const nextPage = (e) => {
    e.preventDefault();
    setPageNum(pageNum + 1);
    console.log("next page num", pageNum);
  };

  //set page num state deduction
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

  const currentPage = () => {
    switch (pageNum) {
      case 1:
        return (
          <GeneralSection
            handleChange={handleChange}
            nextPage={nextPage}
            values={values}
          />
        );

      case 2:
        return (
          <TrainDetails
            handleChange={handleChange}
            nextPage={nextPage}
            prevPage={prevPage}
          />
        );
      case 3:
        return <PersonsDetails />;
      case 4:
        return <PoliceDetails />;
      default:
        break;
    }
  };

  return (
    <div className="ui centered grid">
      <div className="twelve wide column">
        <Escape />
        <form className="ui inverted form form-container">{currentPage()}</form>
      </div>
    </div>
  );
};

export default IncidentForm;
