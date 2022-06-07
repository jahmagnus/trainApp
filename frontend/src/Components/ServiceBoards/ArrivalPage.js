import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

// import TrainList from "./TrainList";
import WarningPage from "../WarningPage";
import EscapeHome from "../Escape/EscapeHome";
import Loader from "./Loader";
import TrainItem from "./TrainItem";

import "./serviceBoard.css";

const ArrivalPage = ({ user }) => {
  //array containg a sample of stations for destinations
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
  let [departureList, setDepartureList] = useState([]);
  let [serviceList, setServiceList] = useState([]);

  //render a list of services on first render and everytime state of departure list changes
  useEffect(() => {
    renderList();
  }, [departureList]);

  const storageData = localStorage.getItem("user");
  const parseUser = JSON.parse(storageData);
  if (parseUser == null) {
    console.log("protected page, please login", user);
    return <Navigate to="/" replace />;
  }

  //function posts stations to server for API consumption
  const submitStations = () => {
    setDepartureList([]);

    const stationObject = {
      destinationStation: destination,
    };

    try {
      if (stationObject.destinationStation !== "") {
        //within this function we can make a POST request to the endpoint at the server
        //which will include the destination station which can then
        //be added to the URI string and data then fetched from the API provider
        axios.post("/arrivals", stationObject).then((res) => {
          setDepartureList(res.data);
          // console.log(res.data.trainServices)
        });
      } else {
        console.log("--No destination");
      }
    } catch (error) {
      console.log(error);
    }
  };

  //on clicking clear stations button, input values in form will be cleared and departure cards will
  //be removed
  const clearStations = () => {
    //these values represent the values in the dropdown menu

    const destinationValue = document.querySelector(".destination-dropdown");

    //set the values in the dropdown to empty strings for user to make a new search
    destinationValue.value = "";

    setDestination("");
    setDepartureList([]);
    setServiceList([]);
  };

  //render a list of the arrival trains
  const renderList = () => {
    //let renderedList = [];

    let trains = departureList;
    console.log(trains.trainServices);
    if (!trains.trainServices) {
      setServiceList(<Loader />);
    } else if (trains.trainServices.length === 0) {
      setServiceList(<WarningPage />);
    } else {
      setServiceList(
        trains.trainServices.map((train) => {
          console.log(train);
          return (
            <TrainItem
              destination={train.origin[0].locationName}
              boardType={"Arrival"}
              time={train.sta}
              status={train.eta}
              platform={train.platform}
            />
          );
        })
      );
    }
  };

  return (
    <div className="ui centered grid">
      <div className="row escape">
        <div className="container arrival">
          <EscapeHome />
        </div>
      </div>
      <form className="ui form">
        <h1 className="ui header">Arrival Board</h1>

        <div className="row arrival">
          <select
            className="destination-dropdown"
            onChange={(e) => {
              setDestination(e.target.value);
            }}
          >
            <option value="">Select Arrival station</option>
            {/*map through the stations array to populate the dropdown*/}
            {departureStations.map((station) => (
              <option value={station.value}>{station.label}</option>
            ))}
          </select>
        </div>
      </form>

      <div className="row arrival">
        <button className="ui positive button" onClick={submitStations}>
          Find Services
        </button>
      </div>
      <div className="row arrival">
        <button className="ui inverted green button" onClick={clearStations}>
          <i className="undo icon"></i>Clear Stations
        </button>
      </div>

      <div className="row arrival">
        <div id="cards">{serviceList}</div>
      </div>
    </div>
  );
};

export default ArrivalPage;
