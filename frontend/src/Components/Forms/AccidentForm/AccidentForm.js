import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

//css
import "./AccidentForm.css";

//component imports
import GeneralSection from "./GeneralSection";
import Escape from "../../Escape/EscapeHome";
import TrainDetails from "./TrainDetails";
import PersonsDetails from "./PersonsDetails";
import PoliceDetails from "./PoliceDetails";
import AbuseDetails from "./AbuseDetails";
import ContributoryFactors from "./ContributoryFactors";
import ReportingPerson from "./ReportingPerson";
import Comments from "./Comments";
import Submit from "../FormComponents/SubmitButton";
import Loader from "./Loader/Loader";

const AccidentForm = ({ user }) => {
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
  const [isOffWork, setIsOffWork] = useState("");
  const [managerName, setManagerName] = useState("");

  //police details state
  const [wasReported, setWasReported] = useState("");
  const [didAttend, setDidAttend] = useState("");

  //abuse details state
  const [isChecked, setIsChecked] = useState(new Array(4).fill(false));
  const [abuseObject, setAbuseObject] = useState(new Map());

  //contributory details
  const [factorsArray, setFactorsArray] = useState([]);

  //details of person reporting
  const [reporterFirstName, setReporterFirstName] = useState("");
  const [reporterSurname, setReporterSurname] = useState("");
  const [reporterJob, setReporterJob] = useState("");
  const [reporterHomeLocation, setReporterHomeLocation] = useState("");
  const [reporterManagerName, setReporterManagerName] = useState("");

  //comment details
  const [comment, setComment] = useState("");

  //navigate variable
  const navigate = useNavigate();

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
    isOffWork,
    managerName,
    wasReported,
    didAttend,
    isChecked,
    factorsArray,
    reporterFirstName,
    reporterSurname,
    reporterJob,
    reporterHomeLocation,
    reporterManagerName,
    comment,
  };

  useEffect(() => {
    
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
    isOffWork,
    managerName,
    wasReported,
    didAttend,
    isChecked,
    abuseObject,
    factorsArray,
    reporterFirstName,
    reporterHomeLocation,
    reporterSurname,
    reporterJob,
    reporterManagerName,
  ]);

  // function for tracking which of the checkboxes are checked in type of abuse page
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
      case "reporterFirstName":
        setReporterFirstName(e.target.value);
        break;
      case "reporterSurname":
        setReporterSurname(e.target.value);
        break;

      case "reporterJob":
        setReporterJob(e.target.value);
        break;

      case "reporterLocation":
        setReporterHomeLocation(e.target.value);
        break;

      case "reporterManager":
        setReporterManagerName(e.target.value);
        break;

      case "comment":
        setComment(e.target.value);
        break;

      default:
        break;
    }
  };

  const getFactors = (arr) => {
    const holderArray = [...arr];
    setFactorsArray(holderArray);
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
            pageNum={pageNum}
          />
        );

      case 2:
        return (
          <TrainDetails
            handleChange={handleChange}
            nextPage={nextPage}
            prevPage={prevPage}
            values={values}
            pageNum={pageNum}
          />
        );
      case 3:
        return (
          <PersonsDetails
            handleChange={handleChange}
            nextPage={nextPage}
            prevPage={prevPage}
            values={values}
            pageNum={pageNum}
          />
        );
      case 4:
        return (
          <PoliceDetails
            handleChange={handleChange}
            nextPage={nextPage}
            prevPage={prevPage}
            values={values}
            pageNum={pageNum}
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
            pageNum={pageNum}
          />
        );
      case 6:
        return (
          <ContributoryFactors
            handleChecked={handleChecked}
            nextPage={nextPage}
            prevPage={prevPage}
            values={values}
            getFactors={getFactors}
            factorsArray={factorsArray}
            pageNum={pageNum}
          />
        );

      case 7:
        return (
          <ReportingPerson
            handleChange={handleChange}
            nextPage={nextPage}
            prevPage={prevPage}
            values={values}
            pageNum={pageNum}
          />
        );
      case 8:
        return (
          <Comments
            nextPage={nextPage}
            prevPage={prevPage}
            values={values}
            handleChange={handleChange}
            pageNum={pageNum}
          />
        );
      default:
        break;
    }
  };

  // const returnHome = () => {

  // }

  //take data from form and send to database
  const handleSubmit = () => {
    axios({
      method: "POST",
      data: {
        username: user.username,
        date: date,
        time: time,
        location: location,
        destination: destination,
        headcode: headcode,
        origin: origin,
        firstName: firstName,
        surname: surname,
        jobTitle: jobTitle,
        homeDepot: homeDepot,
        isOffWork: isOffWork,
        managerName: managerName,
        wasReported: wasReported,
        didAttend: didAttend,
        abuseTypes: abuseObject,
        factors: factorsArray,
        reporterFirstName: reporterFirstName,
        reporterSurname: reporterSurname,
        reporterJob: reporterJob,
        reporterHomeLocation: reporterHomeLocation,
        reporterManagerName: reporterManagerName,
        comment: comment,
      },
      withCredentials: true,
      url: "http://localhost:3000/createIncidentForm",
    }).then((res) => {
      const formContainer = document.querySelector(".column-container");
      formContainer.style.color = "white";
      formContainer.style.fontSize = "2rem";
      formContainer.style.lineHeight="2rem";
      formContainer.innerHTML =
        "Form Submitted Successfully - \n returning to Homepage";
      setTimeout(() => {
        navigate("/home");
      }, 4000);
    });
  };

  return (
    <div className="ui centered grid">
      <div className="twelve wide column column-container">
        <Escape />
        <form className="ui inverted form form-container">{currentPage()}</form>

        <div className="row">
          <Submit values={values} handleSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default AccidentForm;

