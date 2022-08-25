import React, { useState, useEffect } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

import Home from "../Escape/EscapeHome";
import TableList from "./TableList";
import IndividualPayslip from "./IndividualPayslip";

const Payslip = ({ user }) => {
  const [currentYear, setCurrentYear] = useState("");

  //all payslips that exist for a user
  const [payslipObject, setPayslipObject] = useState([]);

  //all payslips that have been filtered and returned by the year selected by user
  const [filteredPayslip, setFilteredPayslip] = useState([]);

  const [payTable, setPayTable] = useState([]);

  //data for an individual payslip when user clicks the view button
  const [individualPayslipData, setIndividualPayslipData] = useState();

  //current clicked payslip ID
  const [payslipID, setPayslipID] = useState("");

  //get all payslips for current user
  useEffect(() => {
    getPayslips();
  }, []);

  //filter payslips by year selected by user.
  useEffect(() => {
    setFilteredPayslip(filterYear(payslipObject));
  }, [currentYear]);

  //when filteredpayslip has updated, create and render the table
  useEffect(() => {
    createTable();
  }, [filteredPayslip]);

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

  //helper to only return date relevant objects from payslips based on the current
  //date selected by the user
  //parameter = the full response object from the database
  const filterYear = (payObject) => {
    const newObject = payObject.filter((el) =>
      el.date.includes(currentYear, 0)
    );
    console.log(newObject);
    return newObject;
  };

  //function will return payslips for a given year
  //defined in this class but actually called in the dropdown component onChange
  const getPayslips = () => {
    axios({
      method: "GET",
      url: "http://localhost:3000/payslipData",
    }).then((res) => {
      setPayslipObject(res.data);
    });
  };

  //create the table of payslips using the TableList component
  const createTable = () => {
    setPayTable(
      filteredPayslip.map((el) => {
        return (
          <TableList
            date={el.date}
            netPay={el.netPay}
            _id={el._id}
            payslips={filteredPayslip}
          />
        );
      })
    );
  };

  const dropdownStyle = {
    marginTop: "2rem",
    marginBottom: "2rem",
    height: "3rem",
    width: "10rem",
    textAlign: "center",
  };

  const divStyle = {
    textAlign: "center",
  };

  return (
    <div className="ui centered grid">
      <div className="fifteen wide column column-container">
        <Home />
        <div style={divStyle}>
          <select
            onChange={(e) => setCurrentYear(e.target.value)}
            style={dropdownStyle}
          >
            <option value="">Select year</option>
            {/* map the values from the 'years' array of objects to the dropdown */}
            {years.map((year) => (
              <option key={year.value} value={year.value}>
                {" "}
                {year.label}
              </option>
            ))}
          </select>
        </div>
        {payTable}
      </div>
    </div>
  );
};

export default Payslip;
