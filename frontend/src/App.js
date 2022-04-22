import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layout";

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

const App = () => {
  return (
    <Routes>
      {/* Public pages*/}
      <Route path="/" element={<Login />} />

      {/* Private pages */}

      <Route exact path="/departures" element={<DeparturePage />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/setuser" element={<SetUser />} />

      {/** Catch */}
      <Route path="*" element={"Page does not exist"} />
    </Routes>
  );
};

export default App;
