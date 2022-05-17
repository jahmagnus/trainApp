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
    { label: "Dunee", value: "DEE" },
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
  let [hasData, setHasData] = useState(false)

  //this function will update the current state of station when selected from the dropdown
  useEffect(() => {

  }, [origin, destination]);

  const storageData = localStorage.getItem("user");
  const parseUser = JSON.parse(storageData);
  if (parseUser == null) {
    console.log("protected page, please login", user);
    return <Navigate to="/" replace />;
  }

  //function posts stations to server for API consumption
  const submitStations = () => {
    const stationObject = {
      originStation: origin,
      destinationStation: destination,
    };

    if(stationObject.originStation !== "" && stationObject.destinationStation === ""){
      stationObject.destinationStation = stationObject.originStation
      setDestination(stationObject.originStation)

      console.log('if', stationObject)
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
      }
    } catch (error) {
      console.log(error);
    }
  };

  const gridStyle = {
    paddingTop: "4rem",
    minHeight: '100vh',
    backgroundColor: '#2b2a26'
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
    width: "11rem",
    height: "4rem",
  };

  const spanStyle = {
    fontStyle: 'italic'
  }

  const headerStyle = {
    color: 'white',
    paddingTop: "1rem"
  }

  const formStyle = {
    border: '1px black',
    borderRadius: '.25rem',
    backgroundColor: '#2b2a26'
  }

  const cardConStyle ={
    backgroundColor: "#2b2a26"
  }

  return (
    <div className="ui centered grid" style={gridStyle}>
      
      <form className="ui form" style={formStyle}>

      <h1 class="ui header" style ={headerStyle}>Departure Board</h1>
        <div className="row" style={rowStyle}>
          <select
            onChange={(e) => {
              setOrigin(e.target.value);
            }}
            style={dropdownStyle}
          >
            <option value="">Select origin</option>
            {/*map through the stations array to populate the dropdown*/}
            {departureStations.map((station) => (
              <option value={station.value}>{station.label}</option>
            ))}
          </select>
        </div>

        <div className="row" style={rowStyle}>
          <select
            onChange={(e) => {
              setDestination(e.target.value);
            }}
            style={dropdownStyle}
          >
            <option value="">Select destination</option>
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
      </div>

      <div id="cards" style={cardConStyle}>

       
        <TrainList departures={departureList}/>
      
      </div>
    </div>
  );
};

export default DeparturePage;
