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
import AbuseDetails from "./AbuseDetails";

const IncidentForm = ({ user }) => {
  //state items
  const [pageNum, setPageNum] = useState(1);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  //service details TRAINSSERVICE
  const [location, setLocation] = useState("");
  const [headcode, setHeadcode] = useState("");
  const [destination, setDestination] = useState("");
  const [origin, setOrigin] = useState("");

  //assaulted persons state PERSONSDETAILS
  const [firstName, setFirstname] = useState("");
  const [surname, setSurname] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [homeDepot, setHomeDepot] = useState("");
  const [isOffwork, setIsOffWork] = useState("");
  const [managerName, setManagerName] = useState("");

  //police details state
  const [wasReported, setWasReported] = useState("");
  const [didAttend, setDidAttend] = useState("");

  //abuse details state
  const [isChecked, setIsChecked] = useState(new Array(4).fill(false));
  const [abuseObject, setAbuseObject] = useState(new Map());

  //values to use for form persistence
  const values = {
    pageNum,
    date,
    time,
    location,
    headcode,
    destination,
    origin,
    firstName,
    surname,
    jobTitle,
    homeDepot,
    isOffwork,
    managerName,
    wasReported,
    didAttend,
    isChecked,
  };

  useEffect(() => {
    console
      .log
      // date,

      // time,

      // location,

      // pageNum,

      // headcode,

      // destination,

      // origin,

      // firstName,
      // surname,
      // jobTitle,
      // homeDepot,
      // isOffwork,
      // managerName,
      // wasReported,
      // didAttend,
      // isChecked
      (abuseObject);
  }, [
    date,
    time,
    location,
    pageNum,
    headcode,
    destination,
    origin,
    firstName,
    surname,
    jobTitle,
    homeDepot,
    isOffwork,
    managerName,
    wasReported,
    didAttend,
    isChecked,
    abuseObject,
  ]);

  // function for tracking which of the checkboxes are checked
  const handleChecked = (e, position) => {
    const updatedCheckedState = isChecked.map((item, index) =>
      index === position ? !item : item
    );
    setIsChecked(updatedCheckedState);

    //create holder map
    const mapHold = new Map([
      ["language", false],
      ["personal", false],
      ["threats", false],
      ["multiple", false],
    ]);

    //get keys from map
    const keys = mapHold.keys();

    //iterate through checked state and add false or true value to map key value pair
    for (let i in updatedCheckedState) {
      mapHold.set(keys.next().value, updatedCheckedState[i]);
    }

    //set state of abuse object
    setAbuseObject(mapHold);
  };

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

      case "firstName":
        setFirstname(e.target.value);
        break;

      case "surname":
        setSurname(e.target.value);
        break;

      case "job":
        setJobTitle(e.target.value);
        break;

      case "home":
        setHomeDepot(e.target.value);
        break;

      case "manager":
        setManagerName(e.target.value);
        break;

      case "absence":
        setIsOffWork(e.target.value);
        break;
      case "reported":
        setWasReported(e.target.value);
        break;
      case "attended":
        setDidAttend(e.target.value);
        break;

      default:
        break;
    }
  };

  //set page number state addition
  const nextPage = (e) => {
    e.preventDefault();
    setPageNum(pageNum + 1);
  };

  //set page num state deduction
  const prevPage = () => {
    setPageNum(pageNum - 1);
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
            values={values}
          />
        );
      case 3:
        return (
          <PersonsDetails
            handleChange={handleChange}
            nextPage={nextPage}
            prevPage={prevPage}
            values={values}
          />
        );
      case 4:
        return (
          <PoliceDetails
            handleChange={handleChange}
            nextPage={nextPage}
            prevPage={prevPage}
            values={values}
          />
        );

      case 5:
        return (
          <AbuseDetails
            isChecked={isChecked}
            handleChecked={handleChecked}
            nextPage={nextPage}
            prevPage={prevPage}
            values={values}
          />
        );
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
