import React from "react";
import {Navigate} from 'react-router-dom';

//component imports
import Field from '../Field'
import Dropdown from '../Dropdown'
import RadioButton from '../RadioButton'
import TextBox from '../TextBox'


const IncidentForm = ({ user }) => {



    //check to see if user data matches the user stored in local storage
  const storageData = localStorage.getItem("user");
  const parseUser = JSON.parse(storageData);
  if (parseUser == null) {
    console.log("protected page, please login", user);
    return <Navigate to="/" replace />;
  }
  return (
    <div className="ui centered grid">
      <form className="ui form form-container">

        <Field/>
        <Dropdown/>
        <RadioButton/>
        <TextBox/>


      </form>
    </div>
  );
};

export default IncidentForm;
