import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import axios from 'axios'

/* // <Router>
    //   <Routes>
    //     <Route exact path="/setusers" element={<SetUser />} />
    //     <Route exact path="/" element={<Login />} />
    //     <Route exact path="/home" element={<Home />} />
    //     <Route exact path="/departures" element={<DeparturePage />} />
    //   </Routes>
    // </Router> */

import Home from "./Components/Home/Home";
import DeparturePage from "./Components/Departures/DeparturePage";
import Login from "./Components/Login/Login";
import SetUser from "./Components/SetUser";
import {getUser} from "./Components/userData"




const App = () => {

  const [user, setUser] = useState(null)

  const userData = async() => {
    const userObject = await getUser()
    const data = userObject.data
    setUser(data)
    
  }

  useEffect(()=> {
    userData()
  }, [])
  

  
  

  return (
    <Routes>
      {/* Public pages*/}
      <Route path="/" element={<Login />} />

      {/* Private pages */}

      <Route exact path="/departures" element={<DeparturePage user={user} />} />
      <Route exact path="/home" element={<Home user={user}/>} />
      <Route exact path="/setuser" element={<SetUser user={user}/>} />

      {/** Catch */}
      <Route path="*" element={"Page does not exist"} />
    </Routes>
  );
};

export default App;
