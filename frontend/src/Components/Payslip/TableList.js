import React, { useState, useEffect } from "react";

import IndividualPayslip from "./IndividualPayslip";


const TableList = ({ date, netPay, _id, payslips, year }) => {
  const [payslipData, setPayslipData] = useState([]);
  const [individual, setIndividual] = useState();
  const [currentYear, setCurrentYear] = useState(year);
  let [hidden, setHidden] = useState("hidden");


  const divStyles = {
    backgroundColor: "grey",
    marginBottom: "1rem",
    paddingBottom: "1rem",
    height: "auto",
    textAlign: "center",
    borderStyle: "solid",
    borderColor: "white",
  };

  useEffect(() => {
    // console.log("payslip data in use effect", payslipData);
    createIndividualPayslip();
  }, [payslipData]);


  useEffect(()=> {
    setCurrentYear(year);
    
  }, [year])

  useEffect(()=> {
    
    setIndividual(<IndividualPayslip hidden={hidden = "hidden"}/>)
    setHidden("hidden")
    console.log("hidden useeffect", hidden);
  }, [currentYear]);

  //function will get payslip data based on ID
  const getPayslipData = () => {
    setPayslipData(payslips.filter((el) => el._id === _id));
  };

 




  //function will create individual payslip data by extracting values from payslip data object
  const createIndividualPayslip = () => {
    setIndividual(
      payslipData.map((el) => {
        return (
          <IndividualPayslip
            basicPay={el.basicPay}
            incomeTax={el.incomeTax}
            nationalInsurance={el.nationalInsurance}
            totalDeductions={el.totalDeductions}
            totalPayment={el.totalPayment}
            pension={el.pension}
            hidden={hidden ==="hidden" ? "" : "hidden"}
          />
        );
      })
    );

    if(hidden === "hidden"){
      setHidden("");
    } else {
      setHidden("hidden");
    }
    console.log("hidden in create indi", hidden);
  };

  return (
    <div style={divStyles}>
      <table className="ui inverted table">
        <tbody>
          <tr>
            <td>Net Pay: £{netPay}</td>
            <td>Date: {date}</td>
            <td>id: {_id}</td>
          </tr>
        </tbody>
      </table>
      <button className="ui primary button" onClick={getPayslipData}>
        View {_id}
      </button>

      {individual}
    </div>
  );
};

export default TableList;
