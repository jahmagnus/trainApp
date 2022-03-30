import React, { useEffect, useState } from "react";
import axios from "axios";

import TrainList from "./TrainList";

const DeparturePage = () => {
  //array containg a sample of stations for departure
  let departureStations = [
    {
      label: "London Kings Cross",
      value: "kgx",
    },
    { label: "Edinburgh",
      value: "edb" },
      { label: "Edinburgh",
      value: "edb" },
      { label: "Edinburgh",
      value: "edb" },
      { label: "Edinburgh",
      value: "edb" },
      { label: "Edinburgh",
      value: "edb" },
      { label: "Edinburgh",
      value: "edb" },
      { label: "Edinburgh",
      value: "edb" },
      { label: "Edinburgh",
      value: "edb" },
      { label: "Edinburgh",
      value: "edb" },
      { label: "Edinburgh",
      value: "edb" },
      { label: "Edinburgh",
      value: "edb" },
      { label: "Edinburgh",
      value: "edb" },
      { label: "Edinburgh",
      value: "edb" },
      { label: "Edinburgh",
      value: "edb" },
      { label: "Edinburgh",
      value: "edb" },
      { label: "Edinburgh",
      value: "edb" },
  ];

  //Using state to track what the selected station is
  let [station, setStation] = useState("Select departure station");

  //this function will update the current state of station when selected from the dropdown
  //I believe it will be here that I will need to take the value of the dropdown and send it out to
  //the server and have it sent away to transport API
  let handleStationChange = (e) => {
    setStation(e.target.value);
  };

  console.log(station);

  return (
    <div>
      <select onChange={handleStationChange}>
        <option value="select station">Select departure station</option>
        {/*map through the stations array to populate the dropdown*/}
        {departureStations.map((station) => (
          <option value={station.value}>{station.label}</option>
        ))}
      </select>

      <TrainList />
    </div>
  );
};

export default DeparturePage;
