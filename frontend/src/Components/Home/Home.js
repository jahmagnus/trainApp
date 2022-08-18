import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

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
  }, []);

  if (!user) {
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
              <Link to="/incident">
                <div className="home-div">
                  <i className="big clipboard icon"></i>
                  <br />
                  Incident form
                </div>
              </Link>
            </div>

            <div className="row home">
              <Link to="/accident">
                <div className="home-div">
                  <i className="big first aid icon"></i>
                  <br />
                  Accident form
                </div>
              </Link>
            </div>

            <div className="row home">
              <div className="home-div">
                <i className=" big money bill alternate icon"></i>
                <br />
                Payslips
              </div>
            </div>

            <div className="row home">
              <Link to="/formdata">
                <div className="home-div">
                  <i className="big database icon"></i>
                  <br />
                  Completed forms
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/*second column on homepage*/}
        <div className="ten wide column">
          <div className="two column row">
            <div className="row details">
              <div className="row username">Hello, {name}</div>
              <br />
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
