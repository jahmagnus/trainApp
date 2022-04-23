import React, { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route, Navigate } from 'react-router-dom';
import TrainList from "./TrainList";

const DeparturePage = ({user}) => {
  //array containg a sample of stations for departure
  let departureStations = [
      {label: "Aberdeen",
      value: "ABD",},
      {label: "Alnmouth",
      value: "ALN" },
      { label: "Arbroath",
      value: "ARB" },
      { label: "Berwick Upon Tweed",
      value: "BWK" },
      { label: "Darlington",
      value: "DAR" },
      { label: "Doncaster",
      value: "DON" },
      { label: "Dunbar",
      value: "DUN" },
      { label: "Dunee",
      value: "DEE" },
      { label: "Edinburgh",
      value: "edb" },
      { label: "Falkirk Grahamston",
      value: "FKG" },
      { label: "Glasgow Central",
      value: "GLC" },
      { label: "Grantham",
      value: "GRA" },
      { label: "Haymarket",
      value: "HYM" },
      { label: "Inverkeithing",
      value: "INK" },
      { label: "Inverness",
      value: "INV" },
      { label: "London Kings Cross",
      value: "KGX" },
      { label: "Kirkcaldy",
      value: "KDY" },
      { label: "Leeds",
      value: "LDS" },
      { label: "Leuchars",
      value: "LEU" },
      { label: "Montrose",
      value: "MTS" },
      { label: "Morpeth",
      value: "MPT" },
      { label: "Motherwell",
      value: "MTH" },
      { label: "Newark North Gate",
      value: "NNG" },
      { label: "Newcastle",
      value: "NCL" },
      { label: "Perth",
      value: "PTH" },
      { label: "Peterborough",
      value: "PBO" },
      { label: "Retford",
      value: "RET" },
      { label: "Stevenage",
      value: "SVG" },
      { label: "Stirling",
      value: "STG" },
      { label: "Stonehaven",
      value: "STN" },
      { label: "Wakefield Westgate",
      value: "WKF" },
      { label: "York",
      value: "YRK" }];

  //Using state to track what the selected station is
  let [station, setStation] = useState("Select departure station");

  //this function will update the current state of station when selected from the dropdown
  //I believe it will be here that I will need to take the value of the dropdown and send it out to
  //the server and have it sent away to transport API
  useEffect(()=> {
      console.log(station)
  }, [station])


  if(!user){
    console.log('protected page, please login')
    return <Navigate to="/" replace/>
    
  }
  return (
    <div>
      <select onChange={(e)=> {setStation(e.target.value)}}>
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
