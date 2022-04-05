import React, { useEffect, useState } from "react";

const Login = () => {
  const containerStyle = {
    marginTop: "1rem",
    backgroundColor: "",
    height: "100vh",
  };

  const gridStyle = {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "5rem",
  };

  const formStyle = {
    border: "1px solid black",
    borderRadius: "10px",
    height: "80vh",
    width: "20rem",
    paddingTop: "8rem",
    backgroundColor: "#5df542",
  };

  const fieldStyle = {
    opacity: "0.75",
    borderBottom: "2px solid black",
  };

  const iconStyle = {
    marginBottom: "3rem",
  };

  //set current state of username and password
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");

  
    
    
    useEffect(() => {
        const usernameInput = document.getElementById("username");
        console.log(username.length, username)
        if(username.length>0 && username.length < 6){
        usernameInput.style.borderBottomColor = "red"
        }else if(username.length === 0){
            usernameInput.style.borderBottomColor = "black"
        }
         else {
            usernameInput.style.borderBottomColor = "green"
        }
    }, [username])

  

  const handlePassword = (e) => {};

  return (
    <div className="ui grid container" style={containerStyle}>
      <div className="ui centered grid" style={gridStyle}>
        <form className="ui form" style={formStyle}>
          <i className="user huge icon" style={iconStyle} />
          <div className="field">
            <label>Username</label>
            <input
              onChange={(e) => setUsername(e.target.value)}
              id="username"
              type="text"
              name="Username"
              placeholder="Username"
              style={fieldStyle}
            />
          </div>
          <div className="field">
            <label>Password</label>
            <input
              onChange={handlePassword}
              id="password"
              type="password"
              name="pwd"
              placeholder="Password"
              style={fieldStyle}
            />
          </div>
          <div className="field"></div>
          <button className="ui button" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
