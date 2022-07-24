import React, { useState } from "react";
import axios from "axios";

import FormTable from "./FormTable";

/*data to return
date - time - location - headcode */

const FormData = ({ user }) => {
  
   

    const populateData = () => {
        axios({
        method: "GET",
        url: "http://localhost:3000/formData",
    }).then((res) => {
        
        //right now this just logs the results from the database query
        //this will be changed to create a new variable that has all values mapped to the form table
        console.log(res);
    })
};

populateData();

  return <FormTable />;
};

export default FormData;
