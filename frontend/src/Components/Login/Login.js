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
    border: "3px solid #5df542",
    borderRadius: "10px",
    height: "80vh",
    width: "20rem",
    paddingTop: "8rem",
    backgroundColor: "black",
  };

  const inputStyle = {
    opacity: "0.75",
    borderBottom: "4px solid black",
    borderRadius: "8px",
  };

  const iconStyle = {
    marginBottom: "3rem",
    color: "#5df542",
  };

  const buttonStyle = {
    backgroundColor: "#5df542",
    color: "white",
    width: "18rem",
  };

  const labelStyle = {
    color: "#5df542",
    letterSpacing: ".5rem",
  };

  const resetDiv = {
    textAlign: "left",
    paddingTop: "0.5rem",
  };
  const resetStyle = {
    color: "white",
  };

  //set current state of username and password
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [isCapsMessage, setCapsMessage] = useState(false)

  //
  useEffect(() => {
    const usernameInput = document.getElementById("username");
    if (username.length > 0 && username.length < 6) {
      usernameInput.style.borderBottomColor = "red";
    } else if (username.length === 0) {
      usernameInput.style.borderBottomColor = "black";
    } else {
      usernameInput.style.borderBottomColor = "#5df542";
    }
  }, [username]);

  useEffect(() => {
    const passwordInput = document.getElementById("password");
    if (password.length > 0 && password.length < 8) {
      passwordInput.style.borderBottomColor = "red";
    } else if (password.length === 0) {
      passwordInput.style.borderBottomColor = "black";
    } else {
      passwordInput.style.borderBottomColor = "#5df542";
    }
  }, [password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

//function to detect whether caps lock is on
  const capsDetection = (e) => {
    


    //get the div by its ID
    const inputBox = document.getElementById('warningAttach')

    //create a paragraph element
    const warningDiv = document.createElement('div')
    
    //assign an ID to the element
    warningDiv.setAttribute('id', 'warning')

    warningDiv.innerHTML = "Caps lock on"
    warningDiv.style.color = 'red'
  
    
    if(e.getModifierState('CapsLock') === true && document.body.contains(document.getElementById('warning')) === false){
      inputBox.append(warningDiv)
      console.log(document.body.contains(warningDiv))
      setCapsMessage(true)
    } else if(e.getModifierState('CapsLock') === false && document.body.contains(document.getElementById('warning')) === true){
      inputBox.removeChild(inputBox.firstChild)
      setCapsMessage(false)
      console.log(document.body.contains(warningDiv))
    } 
  }

  //function to clear caps lock warning if onfocus event handler is fired on username field
  const clearWarnings = () => {
    const inputBox = document.getElementById('warningAttach')
    if(isCapsMessage){
      inputBox.removeChild(inputBox.firstChild)
      setCapsMessage(false)
    }
  }

  return (
    <div className="ui grid container" style={containerStyle}>
      <div className="ui centered grid" style={gridStyle}>
        <form onSubmit={handleSubmit} className="ui form" style={formStyle}>
          <i className="user huge icon" style={iconStyle} />
          <div className="field" id="usernameID" onFocus={clearWarnings}>
            <label style={labelStyle}>Username</label>
            <input
              onChange={(e) => setUsername(e.target.value)}
              id="username"
              type="text"
              name="Username"
              placeholder="Username"
              autoComplete="off"
              value={username}
              style={inputStyle}
            />
          </div>
          <div className="field" id = "passwordField" onKeyUp={capsDetection}>
            <label style={labelStyle}>Password</label>
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              
              
              //do I need the placeholders for username and password?
              id="password"
              type="password"
              name="pwd"
              placeholder="Password"
              value={password}
              style={inputStyle}
            />
            <div id="warningAttach"></div>
            <div className="resetDiv" style={resetDiv}>
              <a href="#" style={resetStyle}>
                Reset password
              </a>
            </div>
          </div>
          <div className="field"></div>
          <button style={buttonStyle} className="ui button" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
