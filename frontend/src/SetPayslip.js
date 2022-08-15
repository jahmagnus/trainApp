import React, {useState, useEffect} from 'react'
import axios from 'axios';

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
            data:{
                date: registerDate,
                netPay: registerNetPay,
                basicPay: registerBasicPay,
                
            }
        })
    }
  
    return (
    <div>SetPayslip</div>
  )
}

export default SetPayslip