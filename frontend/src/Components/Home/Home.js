import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";

import Signout from "../Signout/Signout";
import "./homestyle.css";

const Home = ({ user }) => {
  const [name, setName] = useState("");
  const [payNum, setPayNum] = useState("");
  const [surname, setSurname] = useState("");

  useEffect(() => {
    const userStorage = localStorage.getItem("user");
    const parseUser = JSON.parse(userStorage);

    setName(parseUser.firstName);
    setPayNum(parseUser.payNumber);
    setSurname(parseUser.surname);
    // console.log(parseUser);
  }, []);

  // const iconStyles = {
  //   textAlign: "center",
  //   fontSize: "large",
  //   backgroundColor: "#5df542",
  //   border: "0.1rem solid #0b0c10",
  //   borderBottom: "none",
  // };

  // const rowStyleOne = {
  //   height: "60rem",
  // };

  // const rowStyleTwo = {
  //   height: "64rem",
  //   paddingTop: "1rem",
  //   marginLeft: "auto",
  //   marginRight: "auto",
  // };

  // //navbar divs containg the icons and heading
  // const divStyle = {
  //   height: "9rem",
  //   width: "8rem",
  //   textAlign: "center",
  //   marginLeft: "auto",
  //   marginRight: "auto",
  //   paddingTop: "2.5rem",
  //   paddingBottom: "",
  //   color: "black",
  // };

  // const columnOneStyle = {
  //   borderRight: ".08rem solid black",
  //   height: "66rem",
  //   backgroundColor: "black",
  // };

  // //styling for column 2 row 1
  // const rowStyleUsername = {
  //   height: "5rem",
  //   paddingTop: "1.5rem",
  //   fontSize: "",

  // };

  // //homepage user details div styles
  // const rowStyleUserDetails = {
  //   height: "56rem",
  //   border: ".08rem solid black",
  //   paddingLeft: "0.5rem",
  //   backgroundColor: "#c5c6c7",
  //   paddingTop: "7rem"
  // };

  // const gridStyle = {
  //   height: "65rem",
  //   marginLeft: "auto",
  //   marginRight: "auto",
  // };

  // const appStyle = {
  //   backgroundColor: "none",
  //   height: "65rem",
  // };

  if (!user) {
    console.log("protected page, please login", user);

    return <Navigate to="/" replace />;
  }

  return (
    <div className="ui grid">
      <div className="ui two column grid">
        <div className="six wide column home">
          <div className="seven column row">
            <div className="row home">
              <Link to="/home">
                <div className="home-div">
                  <i className="big home icon"></i>
                  <br />
                  Home
                </div>
              </Link>
            </div>

            <div className="row home">
              <Link to="/departures">
                <div className="home-div">
                  <i className="big clock icon"></i>
                  <br />
                  Departures
                </div>
              </Link>
            </div>

            <div className="row home">
              <Link to="/arrivals">
                <div className="home-div">
                  <i className=" big train icon"></i>
                  <br />
                  Arrivals
                </div>
              </Link>
            </div>

            <div className="row home">
              <div className="home-div">
                <i className="big sun icon"></i>
                <br />
                Weather
              </div>
            </div>

            {/* <div className="row home" >
              <div classname="home-div" >
                <i className="big clipboard icon"></i>
                <br />
                Incident form
              </div>
            </div> */}

            <div className="row home">
              <div className="home-div">
                <i className="big clipboard icon"></i>
                <br />
                Incident form
              </div>
            </div>

            {/* <div className="row home">
              <div classname="home-div">
                <i className="big first aid icon"></i>
                <br />
                Accident form
              </div>
            </div> */}

            <div className="row home">
              <div className="home-div">
                <i className="big first aid icon"></i>
                <br />
                 Accident form
              </div>
            </div>

            <div className="row home">
              <div className="home-div">
                <i className=" big money bill alternate icon"></i>
                <br />
                Payslips
              </div>
            </div>
          </div>
        </div>

        {/*second column on homepage*/}
        <div className="ten wide column">
          <div className="two column row">
            
            

            <div className="row details">

            <div className="row username">Hello, {name}</div>
            <br/>
              PAY NUMBER: <br />
              {payNum} <br />
              <div className="row username">
                NAME:
                <br /> {name} {surname}
              </div>

              <div classname="row signout">
              <Signout />
              </div>
            </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Home;
