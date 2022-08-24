import React from "react";

const TableList = ({date, netPay}) => {

  const divStyles = {
    backgroundColor: "grey",
    marginBottom: "1rem",
    height: "11rem", 
    textAlign: "center",
    borderStyle: "solid",
    borderColor: "white"

  }
  return (
    <div style={divStyles}>
    <table className="ui inverted table">
      <tbody>
        <tr>
          <td>Net Pay: £{netPay}</td>
          <td>Date: {date}</td>
        </tr>
      </tbody>
      
    </table>
    <button class="ui primary button">View</button>
    </div>
  );
};

export default TableList;
