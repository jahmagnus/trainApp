import React, { useState, useEffect } from "react";

import IndividualPayslip from "./IndividualPayslip";

const TableList = ({ date, netPay, _id, payslips }) => {
  const [payslipData, setPayslipData] = useState([]);
  const [individual, setIndividual] = useState();

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
    console.log("payslip data in use effect", payslipData);
    createIndividualPayslip();
  }, [payslipData]);

  useEffect(() => {
    console.log('indi' ,individual);
  }, [individual])

  const getPayslipData = () => {
    console.log("current id", _id);
    setPayslipData(payslips.filter((el) => el._id === _id));
    
  };


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
            
          />
        );
      })
    );
  }

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
