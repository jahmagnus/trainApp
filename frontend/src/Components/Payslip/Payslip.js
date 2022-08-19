import React from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

import Dropdown from "./Dropdown";
import Home from "../Escape/EscapeHome";

const Payslip = ({ user }) => {
  //check to see if there is a user in local storage
  const storageData = localStorage.getItem("user");
  const parseUser = JSON.parse(storageData);
  if (parseUser == null) {
    console.log("protected page, please login", user);
    return <Navigate to="/" replace />;
  }

  //function will return payslips for a given year
  //defined in this class but actually called in the dropdown component onChange
  const getPayslips = (username, year) => {
    
    axios({
        method: "GET", 
        url: "http://localhost:3000/payslipData"
    }).then((res) => {

        //for the moment, console log the results of the request
        console.log(res.data);
    })

  }

  return (
    <div className="ui centered grid">
      <div className="container">
        <Home />
        <Dropdown onChange={getPayslips} user={user}/>
      </div>
    </div>
  );
};

export default Payslip;
