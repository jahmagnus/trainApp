import React from 'react'

import Escape from "../Escape/EscapeHome"

const FormTable = () => {

    

  return (
    <div className ="ui centered grid">
        <div className="fifteen wide column column-container">
        <Escape/>
    <table className="ui inverted table">
    <tbody>
      <tr>
        <td>Date:</td>
        <td>Time:</td>
        <td>Location:</td>
        <td>Headcode:</td>
      </tr>
      </tbody>
    </table>
  </div>
  </div>
  )
}

export default FormTable