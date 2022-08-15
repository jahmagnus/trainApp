import React, {useState, useEffect} from 'react'
import axios from 'axios';

const SetPayslip = () => {
  
    const [date, setDate] = useState("");11
    const [netPay, setNetPay] = useState("");
    const [basicPay, SetBasicPay] = useState("");
    const [totalPayments, setTotalPayments] = useState("");
    const [incomeTax, setIncomeTax] = useState("");
    const [nationalInsurance, setNationalInsurance] = useState("");
    const [pension, setPension] = useState("");
    const [totalDeductions, setTotalDeductions] = useState("");
  
    return (
    <div>SetPayslip</div>
  )
}

export default SetPayslip