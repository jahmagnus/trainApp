import React from "react";
import {Navigate} from 'react-router-dom';

//css
import './IncidentForm.css'

//component imports
import GeneralSection from './GeneralSection'


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
        <div className="twelve wide column">
      <form className="ui inverted form form-container">

        <GeneralSection/>


      </form>

      </div>
    </div>
  );
};

export default IncidentForm;
