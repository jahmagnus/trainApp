import React, { useState, useEffect } from "react";
import axios from "axios";

const SetPayslip = ({ user }) => {
  const [registerDate, setDate] = useState("");
  const [registerNetPay, setNetPay] = useState("");
  const [registerBasicPay, SetBasicPay] = useState("");
  const [registerTotalPayments, setTotalPayments] = useState("");
  const [registerIncomeTax, setIncomeTax] = useState("");
  const [registerNationalInsurance, setNationalInsurance] = useState("");
  const [registerPension, setPension] = useState("");
  const [registerTotalDeductions, setTotalDeductions] = useState("");

  const formStyle = {
    marginTop: "3rem",
  };

  const registerPayslip = () => {
    axios({
      method: "POST",
      data: {
        user: user.payNumber,
        date: registerDate,
        netPay: registerNetPay,
        basicPay: registerBasicPay,
        totalPayment: registerTotalPayments,
        incomeTax: registerIncomeTax,
        nationalInsurance: registerNationalInsurance,
        pension: registerPension,
        totalDeductions: registerTotalDeductions,
      },
      withCredentials: true,
      url: "",
    }).then((res) => console.log(res));
  };

  return (
    <div className="ui centered grid">
      <form className="ui form" style={formStyle}>
        
        <div className="field">
          <label>date</label>
          <input
            type="date"
            name="date"
            placeholder="date"
            onChange={(e) => {setDate(e.target.value)}}
          />
        </div>

        <div className="field">
          <label>Net pay</label>
          <input
            type="text"
            name="netPay"
            placeholder="net pay"
            onChange={(e) => {setNetPay(e.target.value)}}
          />
        </div>

        <div className="field">
          <label>Basic pay</label>
          <input
            type="text"
            name="basicPay"
            placeholder="basic pay"
            onChange={(e) => {SetBasicPay(e.target.value)}}
          />
        </div>
        <div className="field">
          <label>Income Tax</label>
          <input
            type="text"
            name="incomeTax"
            placeholder="income tax"
            onChange={(e) => {setTotalPayments(e.target.value)}}
          />
        </div>
        <div className="field">
          <label>National Insurance</label>
          <input
            type="text"
            name="nationalInsurance"
            placeholder="National Insurance"
            onChange={(e) => {setNationalInsurance(e.target.value)}}
          />
        </div>
        <div className="field">
          <label>Pension</label>
          <input
            type="text"
            name="pension"
            placeholder="Pension"
            onChange={(e) => {setPension(e.target.value)}}
          />
        </div>
        <div className="field">
          <label>Total deductions</label>
          <input
            type="text"
            name="totalDeductions"
            placeholder="Total Deductions"
            onChange={(e) => {setTotalDeductions(e.target.value)}}
          />
        </div>

        <button className="ui button" type="submit" onClick={registerPayslip}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default SetPayslip;
