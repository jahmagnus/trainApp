import React, { useState } from "react";
import axios from "axios";

const SetUser = () => {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerFirstName, setRegisterFirstName] = useState("");
  const [registerSurname, setRegisterSurname] = useState("");
  const [registerPayNumber, setRegisterPayNumber] = useState("");
  const [registerRole, setRegisterRole] = useState("");

  const formStyle = {
    marginTop: "3rem",
  };

  const register = () => {
    axios({
      method: "POST",
      data: {
        username: registerUsername,
        password: registerPassword,
        payNumber: registerPayNumber,
        firstName: registerFirstName,
        surname: registerSurname,
        role: registerRole,
      },
      withCredentials: true,
      url: "http://localhost:3000/createUser"
    }).then((res) => console.log(res))
  };

  return (
    <div className="ui centered grid">
      <form className="ui form" style={formStyle}>
        <div className="field">
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder="username"
            onChange={(e) => {
              setRegisterUsername(e.target.value);
            }}
          />
        </div>
        <div className="field">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={(e) => {
              setRegisterPassword(e.target.value);
            }}
          />
        </div>

        <div className="field">
          <label>First name</label>
          <input
            type="text"
            name="firstName"
            placeholder="first name"
            onChange={(e) => {
              setRegisterFirstName(e.target.value);
            }}
          />
        </div>

        <div className="field">
          <label>surname</label>
          <input
            type="text"
            name="surname"
            placeholder="surname"
            onChange={(e) => {
              setRegisterSurname(e.target.value);
            }}
          />
        </div>

        <div className="field">
          <label>pay number</label>
          <input
            type="text"
            name="payNumber"
            placeholder="pay number"
            onChange={(e) => {
              setRegisterPayNumber(e.target.value);
            }}
          />
        </div>

        <div className="field">
          <label>role</label>
          <input
            type="text"
            name="role"
            placeholder="role"
            onChange={(e) => {
              setRegisterRole(e.target.value);
            }}
          />
        </div>

        <button className="ui button" type="submit" onClick={register}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default SetUser;
