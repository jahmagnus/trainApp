import React, { useState, useEffect } from "react";
import axios from "axios";

const SetPayslip = () => {
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
          <label>Net pay</label>
          <input
            type="date"
            name="date"
            placeholder="date"
            onChange={(e) => {
             
            }}
          />
          </div>

      <div className="field">
          <label>Net pay</label>
          <input
            type="text"
            name="netPay"
            placeholder="net pay"
            onChange={(e) => {
             
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default SetPayslip;
