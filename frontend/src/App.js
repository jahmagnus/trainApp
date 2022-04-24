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

  // const userData = async() => {
  //   const userObject = await getUser()
  //   const data = userObject.data
  //   setUser(data)
  //console.log(user)
  // }

  

  //userData()

  // const getUser = async () => {
  //   const userObject = await axios({
  //     method: "GET",
  //     withCredentials: true,
  //     url: "http://localhost:3000/getUser",
  //   });
  //   console.log("get user function", JSON.stringify(userObject.data));
  //   setUser(userObject.data)
  // };

  // useEffect(()=> {
  //   getUser()
  //   console.log('user', user)
  // }, [])


  const handleUser = (currentUser) => {
    setUser(currentUser)
    
  }

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
      console.log(user)
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
