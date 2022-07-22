import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import Home from "./Components/Home/Home";
import DeparturePage from "./Components/ServiceBoards/DeparturePage";
import Login from "./Components/Login/Login";
import SetUser from "./Components/SetUser";
import ArrivalPage from "./Components/ServiceBoards/ArrivalPage";
import IncidentForm from "./Components/Forms/IncidentForm/IncidentForm";
import AccidentForm from "./Components/Forms/AccidentForm/AccidentForm";


const App = () => {
  const [user, setUser] = useState(null);

  const handleUser = (currentUser) => {
    setUser(currentUser);
  };

  //check for a logged in user and set this user as the current logged in user
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
      <Route path="/" element={<Login handleUser={handleUser} />} />

      {/* Private pages */}

      <Route exact path="/departures" element={<DeparturePage user={user} />} />
      <Route exact path="/home" element={<Home user={user} />} />
      <Route exact path="/setuser" element={<SetUser user={user} />} />
      <Route exact path="/arrivals" element={<ArrivalPage user={user} />} />
      <Route exact path="/incident" element={<IncidentForm user={user} />} />
      <Route exact path="/Accident" element={<AccidentForm user={user} />} />

      {/** Catch */}
      <Route path="*" element={"Page does not exist"} />
    </Routes>
  );
};

export default App;
