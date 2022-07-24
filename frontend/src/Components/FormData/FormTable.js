import React from 'react'



const FormTable = ({ date, time, location, headcode }) => {

    

  return (
    
    <table className="ui inverted table">
    <tbody>
      <tr>
        <td>Date: {date}</td>
        <td>Time: {time}</td>
        <td>Location: {location}</td>
        <td>Headcode: {headcode}</td>
      </tr>
      </tbody>
    </table>
  
  )
}

export default FormTable