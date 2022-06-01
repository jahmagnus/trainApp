import React, { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route, Navigate } from "react-router-dom";
import TrainList from "./TrainList";
import WarningPage from "../WarningPage";
import EscapeHome from "../Escape/EscapeHome"



const ArrivalPage = ({ user }) => {
  //array containg a sample of stations for destinations and origins
  //this could go in it's own component, but leaving here for now.
  let stations = [
    { label: "Aberdeen", value: "ABD" },
    { label: "Alnmouth", value: "ALM" },
    { label: "Arbroath", value: "ARB" },
    { label: "Berwick Upon Tweed", value: "BWK" },
    { label: "Darlington", value: "DAR" },
    { label: "Doncaster", value: "DON" },
    { label: "Dunbar", value: "DUN" },
    { label: "Dundee", value: "DEE" },
    { label: "Edinburgh", value: "EDB" },
    { label: "Falkirk Grahamston", value: "FKG" },
    { label: "Glasgow Central", value: "GLC" },
    { label: "Grantham", value: "GRA" },
    { label: "Haymarket", value: "HYM" },
    { label: "Inverkeithing", value: "INK" },
    { label: "Inverness", value: "INV" },
    { label: "London Kings Cross", value: "KGX" },
    { label: "Kirkcaldy", value: "KDY" },
    { label: "Leeds", value: "LDS" },
    { label: "Leuchars", value: "LEU" },
    { label: "Montrose", value: "MTS" },
    { label: "Morpeth", value: "MPT" },
    { label: "Motherwell", value: "MTH" },
    { label: "Newark North Gate", value: "NNG" },
    { label: "Newcastle", value: "NCL" },
    { label: "Perth", value: "PTH" },
    { label: "Peterborough", value: "PBO" },
    { label: "Retford", value: "RET" },
    { label: "Stevenage", value: "SVG" },
    { label: "Stirling", value: "STG" },
    { label: "Stonehaven", value: "STN" },
    { label: "Wakefield Westgate", value: "WKF" },
    { label: "York", value: "YRK" },
  ];

  //Using state to track what the selected station is
  let [originStation, setOriginStation] = useState("")
  let [arrivalStation, setArrivalStation] = useState("");
  let [arrivalList, setArrivalList] = useState([]);

  //this function will display the current state of origin and destination whenever their state changes
  useEffect(() => {
    console.log(
        
      "current origin = ",
      arrivalStation,
      "current arrival = ",
      arrivalStation
    );
  }, [arrivalStation]);

  const storageData = localStorage.getItem("user");
  const parseUser = JSON.parse(storageData);
  if (parseUser == null) {
    console.log("protected page, please login", user);
    return <Navigate to="/" replace />;
  }

  //function posts stations to server for API consumption
  const submitStations = () => {
    setArrivalList([])
    
    const stationObject = {
      arrivalStation: arrivalStation,
      originStation: originStation
    };

    if (
        stationObject.arrivalStation !== "" &&
        stationObject.originStation === ""
      ) {
        stationObject.originStation = stationObject.arrivalStation;
        setArrivalStation(stationObject.originStation);
      }

    try {
      if (
        stationObject.arrivalStation !== "" &&
        stationObject.originStation !== ""
      ) {
        //within this function we can make a POST request to the endpoint at the server
        //which will include the origin and destination station which can then
        //be added to the URI string and data then fetched from the API provider
        axios.post("/arrivals", stationObject).then((res) => {
          setArrivalList(res.data.departures);
        });
      } else {
        console.log("--No Arrival station");
      }
    } catch (error) {
      console.log(error);
    }
  };

  //on clicking clear stations button, input values in form will be cleared and departure cards will
  //be removed
  const clearStations = () => {
    //these values represent the values in the dropdown menu
    const arrivalValue = document.querySelector(".arrival-dropdown");
    const originValue = document.querySelector(".origin-dropdown")
    
    
    //set the values in the dropdown to empty strings for user to make a new search
    arrivalValue.value = "";
    originValue.value = ""
    
    //clear the state of arrival station and arrival list
    setOriginStation("")
    setArrivalStation("")
    setArrivalList([]);
  };

  const gridStyle = {
    paddingTop: "4rem",
    minHeight: "100vh",
    backgroundColor: "#2b2a26",
  };

  const dropdownStyle = {
    width: "20rem",
    height: "3rem",
    border: "5px",
  };

  const rowStyle = {
    marginTop: "0.5rem"
  };

  const buttonStyle = {
    width: "20rem",
    height: "4rem",
    display: "block"
  };

  const headerStyle = {
    color: "white",
    paddingTop: "1rem",
  };

  const formStyle = {
    border: "1px black",
    borderRadius: ".25rem",
    backgroundColor: "#2b2a26",
  };

  const cardConStyle = {
    backgroundColor: "#2b2a26",
  };

  const conStyle = {
    marginLeft: '-11rem'
  }

  const buttonRow = {
    marginTop: '.5rem',
    padding: '0',
  }


  return (
    <div className="ui centered grid" style={gridStyle}>
     <div className="row">
       <div className="container" style={conStyle}>
      <EscapeHome/>
      </div>
      </div>
      <form className="ui form" style={formStyle}>
        <h1 className="ui header" style={headerStyle}>
          Arrival Board
        </h1>
        <div className="row" style={rowStyle}>
          <select className="arrival-dropdown"
            onChange={(e) => {
              setArrivalStation(e.target.value);
            }}
            style={dropdownStyle}
          >
            <option value="">
              Select arrival station
            </option>
            {/*map through the stations array to populate the dropdown*/}
            {stations.map((station) => (
              <option value={station.value}>{station.label}</option>
            ))}
          </select>

          <select className="origin-dropdown"
            onChange={(e) => {
              setOriginStation(e.target.value);
            }}
            style={dropdownStyle}
          >
            <option value="">
              Select origin station
            </option>
            {/*map through the stations array to populate the dropdown*/}
            {stations.map((station) => (
              <option value={station.value}>{station.label}</option>
            ))}
          </select>
        </div>

        

      </form>

      <div className="row" style={buttonRow}>
        <button
          className="ui positive button"
          onClick={submitStations}
          style={buttonStyle}
        >
          Find Services
        </button>
        </div>
        
        <div className="row" style={buttonRow}>
        <button
          className="ui inverted green button"
          style={buttonStyle}
          onClick={clearStations}
        >
          <i className="undo icon"></i>Clear Stations
        </button>
     </div>

      <div id="cards" style={cardConStyle}>
        <TrainList services={arrivalList} />
      </div>
    </div>
  );
};

export default ArrivalPage;
