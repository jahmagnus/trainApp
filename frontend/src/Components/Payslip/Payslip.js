import React, {useState, useEffect} from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

import Home from "../Escape/EscapeHome";

const Payslip = ({ user }) => {

const [currentYear, setCurrentYear] = useState("")

useEffect(() => {
console.log(currentYear)
getPayslips();
}, [currentYear])

  //check to see if there is a user in local storage
  const storageData = localStorage.getItem("user");
  const parseUser = JSON.parse(storageData);
  if (parseUser == null) {
    console.log("protected page, please login", user);
    return <Navigate to="/" replace />;
  }


   //years for the dropdown menu to be populated with.
   const years = [
    { label: "2022", value: "2022" },
    { label: "2021", value: "2021" },
    { label: "2020", value: "2020" },
    { label: "2019", value: "2019" },
    { label: "2018", value: "2018" },
  ];

  //helper to only return date relevant objects from payslips
  const filterYear = (payObject) => {
    const newObject = payObject.filter(el => el.date.includes(currentYear, 0))
    return newObject
  }

  //function will return payslips for a given year
  //defined in this class but actually called in the dropdown component onChange
  const getPayslips = () => {
    
    axios({
        method: "GET", 
        url: "http://localhost:3000/payslipData"
    }).then((res) => {

        //for the moment, console log the results of the request
        console.log(res.data);

        const filteredSlip = filterYear(res.data);
        console.log(filteredSlip);
    })
}

  return (
    <div className="ui centered grid">
      <div className="container">
        <Home />
        <div>
      <select onChange={(e) => setCurrentYear(e.target.value)}>
        <option value="">Select year</option>
        {/* map the values from the 'years' array of objects to the dropdown */}
        {years.map((year) => (
          <option key={year.value} value={year.value}> {year.label}</option>
        ))}
      </select>
    </div>
      </div>
    </div>
  );
};

export default Payslip;
