import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";

import Home from "./Components/Home/Home";
import DeparturePage from "./Components/Departures/DeparturePage";
import Login from "./Components/Login/Login";
import SetUser from "./Components/SetUser";
import { getUser } from "./Components/userData";

const App = () => {
  const [user, setUser] = useState(null);


  const handleUser = (currentUser) => {
    setUser(currentUser)
    
  }

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  return (
    <Routes>
      {/* Public pages*/}
      <Route path="/" element={<Login handleUser={handleUser}/>} />

      {/* Private pages */}

      <Route exact path="/departures" element={<DeparturePage user={user} />} />
      <Route exact path="/home" element={<Home user={user} />} />
      <Route exact path="/setuser" element={<SetUser user={user} />} />

      {/** Catch */}
      <Route path="*" element={"Page does not exist"} />
    </Routes>
  );
};

export default App;
