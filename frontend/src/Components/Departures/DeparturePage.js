import React, { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route, Navigate } from "react-router-dom";
import TrainList from "./TrainList";
import WarningPage from "../WarningPage";



const DeparturePage = ({ user }) => {
  //array containg a sample of stations for destinations and origins
  //this could go in it's own component, but leaving here for now.
  let departureStations = [
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
  let [destination, setDestination] = useState("");
  let [origin, setOrigin] = useState("");
  let [departureList, setDepartureList] = useState([]);

  //this function will display the current state of origin and destination whenever their state changes
  useEffect(() => {
    console.log(
      "current origin = ",
      origin,
      " current destination = ",
      destination
    );
  }, [origin, destination]);

  const storageData = localStorage.getItem("user");
  const parseUser = JSON.parse(storageData);
  if (parseUser == null) {
    console.log("protected page, please login", user);
    return <Navigate to="/" replace />;
  }

  //function posts stations to server for API consumption
  const submitStations = () => {
    setDepartureList([])
    
    const stationObject = {
      originStation: origin,
      destinationStation: destination,
    };

    if (
      stationObject.originStation !== "" &&
      stationObject.destinationStation === ""
    ) {
      stationObject.destinationStation = stationObject.originStation;
      setDestination(stationObject.originStation);
    }

    try {
      if (
        stationObject.originStation !== "" &&
        stationObject.destinationStation !== ""
      ) {
        //within this function we can make a POST request to the endpoint at the server
        //which will include the origin and destination station which can then
        //be added to the URI string and data then fetched from the API provider
        axios.post("/trains", stationObject).then((res) => {
          setDepartureList(res.data.departures);
        });
      } else {
        console.log("--No origin or destination data");
        console.log("origin", origin, "des", destination);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //on clicking clear stations button, input values in form will be cleared and departure cards will
  //be removed
  const clearStations = () => {
    //these values represent the values in the dropdown menu
    const originValue = document.querySelector(".origin-dropdown");
    const destinationValue = document.querySelector(".destination-dropdown");
    
    //set the values in the dropdown to empty strings for user to make a new search
    originValue.value = "";
    destinationValue.value = "";

    setOrigin("")
    setDestination("")
    setDepartureList([]);
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
    marginTop: "1rem",
  };

  const buttonStyle = {
    width: "20rem",
    height: "4rem",
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

  return (
    <div className="ui centered grid" style={gridStyle}>
      <form className="ui form" style={formStyle}>
        <h1 className="ui header" style={headerStyle}>
          Departure Board
        </h1>
        <div className="row" style={rowStyle}>
          <select className="origin-dropdown"
            onChange={(e) => {
              setOrigin(e.target.value);
            }}
            style={dropdownStyle}
          >
            <option value="">
              Select origin
            </option>
            {/*map through the stations array to populate the dropdown*/}
            {departureStations.map((station) => (
              <option value={station.value}>{station.label}</option>
            ))}
          </select>
        </div>

        <div className="row" style={rowStyle}>
          <select className="destination-dropdown"
            onChange={(e) => {
              setDestination(e.target.value);
            }}
            style={dropdownStyle}
          >
            <option value="" >
              Select destination
            </option>
            {/*map through the stations array to populate the dropdown*/}
            {departureStations.map((station) => (
              <option value={station.value}>{station.label}</option>
            ))}
          </select>
        </div>
      </form>

      <div className="row">
        <button
          className="ui positive button"
          onClick={submitStations}
          style={buttonStyle}
        >
          Find Services
        </button>

        <button
          className="ui inverted green button"
          style={buttonStyle}
          onClick={clearStations}
        >
          <i className="undo icon"></i>Clear Stations
        </button>
      </div>

      <div id="cards" style={cardConStyle}>
        <TrainList departures={departureList} />
      </div>
    </div>
  );
};

export default DeparturePage;
