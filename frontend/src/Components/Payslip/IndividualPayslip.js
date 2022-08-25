import React from 'react'

const IndividualPayslip = ({basicPay, incomeTax, nationalInsurance, totalDeductions, totalPayment, pension, hidden}) => {
  return (
    <div hidden={hidden}>
    <table className="ui inverted table">
        <tbody>
          <tr>
            <td>basic Pay: £{basicPay}</td>
            <td>Income Tax: £{incomeTax}</td>
            <td>NI: £{nationalInsurance}</td>
            <td>Total Deductions: £{totalDeductions}</td>
            <td>Total Payment: £{totalPayment}</td>
            <td>Pension: {pension}</td>
          </tr>
        </tbody>
      </table>
      </div>
  )
}

export default IndividualPayslip