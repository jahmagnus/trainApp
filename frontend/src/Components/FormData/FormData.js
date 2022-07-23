import React from "react";
import axios from "axios";

import FormTable from "./FormTable";

/*data to return
date - time - location - headcode */

const FormData = ({ user }) => {
  
    const populateData = () => {
    const currentUser = user.username;
    
    const data = axios({
        method: "GET",
        url: "http://localhost:3000/formData"
    }).then((res) => {
        console.log(res);
    })



};

  return <FormTable />;
};

export default FormData;
