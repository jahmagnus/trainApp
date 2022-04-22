import React, {useEffect, useState} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Components/Home/Home";
import DeparturePage from "./Components/Departures/DeparturePage"; 
import Login from "./Components/Login/Login"
import SetUser from "./Components/SetUser"
//import axios from "axios";

const App = () => {
  const iconStyles = {
    textAlign: "center",
    fontSize: "large",
  };

  const rowStyleOne = {
    height: "56rem",
    paddingTop: "1rem",
    paddingLeft: "0.5rem",
  };

  const rowStyleTwo = {
    height: "65rem",
    paddingTop: "1rem",
  };

  //navbar divs containg the icons and heading
  const divStyle = {
    height: "9rem",
    width: "8rem",
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: "25%",
    paddingBottom: "25%",
  };

  const columnOneStyle = {
    borderRight: ".08rem solid black",
    height: "65rem",
  };

  //styling for column 2 row 1
  const rowStyleUsername = {
    height: "5rem",
    paddingTop: "1.5rem",
  };

  //homepage user details div styles
  const rowStyleUserDetails = {
    height: "56rem",
    border: ".08rem solid black",
    paddingLeft: "0.5rem",
  };

  const gridStyle = {
    height: "61rem",
  };

  const appStyle = {
    backgroundColor: "none",
    height: "56rem",
  };

  

  return (
    <Router>
      <Routes>
        <Route exact path="/setusers" element={<SetUser />} />
        <Route exact path="/" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/departures" element={<DeparturePage />} />
      </Routes>
    </Router>
  );
};

export default App;
