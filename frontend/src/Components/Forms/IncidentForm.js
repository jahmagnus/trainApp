import React from "react";
import {Navigate} from 'react-router-dom';

//component imports
import Field from './FormComponents/Field'
import Dropdown from './FormComponents/Dropdown'
import RadioButton from './FormComponents/RadioButton'
import TextBox from './FormComponents/TextBox'


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
        <div className="ten wide column">
      <form className="ui inverted form form-container">

        <Field/>
        <Dropdown/>
        <RadioButton/>
        <TextBox/>


      </form>

      </div>
    </div>
  );
};

export default IncidentForm;
