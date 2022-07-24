import React, { useState, useEffect } from "react";
import axios from "axios";

import FormTable from "./FormTable";
import Escape from "../Escape/EscapeHome"

/*data to return
date - time - location - headcode */

const FormData = ({ user }) => {

    let [table, setTable] = useState([]);


  useEffect(()=> {
    populateData();
  },[])  

  const populateData = () => {
    axios({
      method: "GET",
      url: "http://localhost:3000/formData",
    }).then((res) => {
    
        //create form object containting response data
        let formObject = res.data;
        setTable(formObject.map(el => {
           return <FormTable date={el.date} time={el.time} location={el.location} headcode={el.headcode}/>
        }))   
        console.log(res);     
    });
  };

  

  return(
    <div className ="ui centered grid">
    <div className="fifteen wide column column-container">
    <Escape/>
    {table}
    </div>
  </div>
  )
};

export default FormData;
