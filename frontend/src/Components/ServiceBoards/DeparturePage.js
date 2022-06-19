import React, { useEffect, useState } from "react";
import axios from "axios";


// import TrainList from "./TrainList";
import WarningPage from "../WarningPage";
import EscapeHome from "../Escape/EscapeHome";
import Loader from "./Loader";
import TrainItem from "./TrainItem";

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
        axios.post("/departures", stationObject).then((res) => {
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

    setOrigin("");
    setDestination("");
    setDepartureList([]);
    setServiceList([]);
  };

  //render a list of the arrival trains
  const renderList = () => {
    //let renderedList = [];

    let trains = departureList;

    if (!trains.all) {
      setServiceList(<Loader />);
    } else if (trains.all.length === 0) {
      setServiceList(<WarningPage />);
    } else {
      setServiceList(
        trains.all.map((train) => {
          return (
            <TrainItem
              destination={train.destination_name}
              boardType={"Departure"}
              time={train.expected_departure_time}
              status={train.status}
              platform={train.platform}
            />
          );
        })
      );
    }
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
    marginTop: "0.5rem",
  };

  const buttonStyle = {
    width: "20rem",
    height: "4rem",
    display: "block",
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
    marginLeft: "-9rem",
  };

  const buttonRow = {
    marginTop: ".5rem",
    padding: "0",
  };

  return (
    <div className="ui centered grid" style={gridStyle}>
      <div className="row">
        <div className="container" style={conStyle}>
          <EscapeHome />
        </div>
      </div>
      <form className="ui form" style={formStyle}>
        <h1 className="ui header" style={headerStyle}>
          Departure Board
        </h1>
        <div className="row" style={rowStyle}>
          <select
            className="origin-dropdown"
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
            className="destination-dropdown"
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
      <div className="row">
        <div id="cards" style={cardConStyle}>
          {serviceList}
        </div>
      </div>

      <div className="row">
        <div className="warning"></div>
      </div>
    </div>
  );
};

export default DeparturePage;
