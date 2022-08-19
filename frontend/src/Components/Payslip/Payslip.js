import React from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

import Dropdown from "./Dropdown";
import Home from "../Escape/EscapeHome"

const Payslip = ( {user} ) => {

  //check to see if there is a user in local storage
  const storageData = localStorage.getItem("user");
  const parseUser = JSON.parse(storageData);
  if (parseUser == null) {
    console.log("protected page, please login", user);
    return <Navigate to="/" replace />;
  }


  return (
    <div className="ui centered grid">
        <div className="container">
            <Home />
      <Dropdown />
      </div>
    </div>
  );
};

export default Payslip;
