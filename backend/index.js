import dotenv from "dotenv";
import express from "express";
import { MongoClient } from "mongodb";
import fetch from "node-fetch";
import mongoose from "mongoose";
import cors from "cors";
import passport from "passport";
import passportLocal from "passport-local";
import cookieParser from "cookie-parser";
import bcrypt from "bcrypt";
import session from "express-session";
import bodyParser from "body-parser";

//user schema for mongoDB
import User from "./User.js";

//incident report schema import
import IncidentForm from "./IncidentFormObject.js";

//accident form Schema import
import AccidentForm from "./AccidentFormObject.js";

//payslip schema
import Payslip from "./Payslip.js";

dotenv.config();
const app = express();

//middleware
app.use(bodyParser.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());
import passportConfig from "./passportConfig.js";
passportConfig(passport);

const pwd = process.env.DB_PWD;
const DBusername = process.env.DB_USERNAME;
const uri = `mongodb+srv://${DBusername}:${pwd}@train-data.jizrg.mongodb.net/TrainData?retryWrites=true&w=majority`;
await mongoose.connect(uri);

app.get("/getUser", (req, res) => {
  res.send(req.user);
});

//current user
let currentUser = undefined;

//routes
app.post("/userlogin", async (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) {
      console.log("app.post endpoint index.js", req.user);
      //res.send({authenticated: false})
      res.send(user);
    } else {
      req.logIn(user, (err) => {
        // res.send({authenticated: true})
        currentUser = user.username;
        res.send(user);
      });
    }
  })(req, res, next);
});

//create new user in the database
app.post("/createUser", async (req, res) => {
  try {
    //consider removal of this connection code as connection already established
    await mongoose.connect(uri);
    console.log("mongoose connected set user");

    User.findOne({ username: req.body.username }, async (err, document) => {
      if (err) throw err;
      if (document) res.send("user already exists");
      if (!document) {
        //hash the plain text password
        const hashedPwd = await bcrypt.hash(req.body.password, 10);
        const newUser = new User({
          username: req.body.username,
          password: hashedPwd,
          payNumber: req.body.payNumber,
          firstName: req.body.firstName,
          surname: req.body.surname,
          role: req.body.role,
        });
        await newUser.save();
        // res.send("user saved");
      }
    });
  } catch (error) {
    console.log(error, "blip");
  }
  console.log(req.body);
});

//create new incident form in the database
app.post("/createIncidentForm", async (req, res) => {
  try {
    await mongoose.connect(uri);
    console.log("mongoose connected set user");

    const newIncident = new IncidentForm({
      username: req.body.username,
      date: req.body.date,
      time: req.body.time,
      location: req.body.location,
      destination: req.body.destination,
      headcode: req.body.headcode,
      origin: req.body.origin,
      firstName: req.body.firstName,
      surname: req.body.surname,
      jobTitle: req.body.jobTitle,
      homeDepot: req.body.homeDepot,
      isOffwork: req.body.isOffWork,
      managerName: req.body.managerName,
      wasReported: req.body.wasReported,
      didAttend: req.body.didAttend,
      abuseTypes: req.body.abuseObject,
      factors: req.body.factorsArray,
      reporterFirstName: req.body.reporterFirstName,
      reporterSurname: req.body.reporterSurname,
      reporterJob: req.body.job,
      reporterHomeLocation: req.body.reporterHomeLocation,
      reporterManagerName: req.body.reporterManagerName,
      comment: req.body.comment,
    });
    await newIncident.save();
    res.send("Incident form saved");
  } catch (err) {
    console.log(err);
  }

  console.log("in index", req.body);
});

app.post("/createAccidentForm", async (req, res) => {
  try {
    //connect to database at defined URI
    await mongoose.connect(uri);

    const newAccident = new AccidentForm({
      username: req.body.username,
      date: req.body.date,
      time: req.body.time,
      location: req.body.location,
      destination: req.body.destination,
      headcode: req.body.headcode,
      origin: req.body.origin,
      firstName: req.body.firstName,
      surname: req.body.surname,
      jobTitle: req.body.jobTitle,
      homeDepot: req.body.homeDepot,
      isOffwork: req.body.isOffWork,
      managerName: req.body.managerName,
      reporterFirstName: req.body.reporterFirstName,
      reporterSurname: req.body.reporterSurname,
      reporterJob: req.body.job,
      reporterHomeLocation: req.body.reporterHomeLocation,
      reporterManagerName: req.body.reporterManagerName,
      comment: req.body.comment,
    });
    await newAccident.save();
    res.send("Accident form saved");
  } catch (err) {
    console.log(err);
  }

  console.log("in index", req.body);
});

const port = 5000;
//create the server instance and assign the port
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});

//serve static pages from the folder public
//app.use(express.static('public'));

//limit request data sizes to prevent flooding
app.use(
  express.json({
    limit: "1mb",
  })
);

//credentials using transportAPI
const apiKey = process.env.API_KEY;
const appID = "b74798d6"; //this may need to be changed on deployment

//credentials using NR SOAP proxy
const apiKeyNR = process.env.API_KEY_NR;

app.post("/departures", async (request, response) => {
  const origin = request.body.originStation;
  const destination = request.body.destinationStation;

  const api_url = `https://transportapi.com/v3/uk/train/station/${origin}/live.json?app_id=${appID}&app_key=${apiKey}&darwin=false&calling_at=${destination}&train_status=passenger`;
  const fetch_response = await fetch(api_url);
  const trainData = await fetch_response.json();
  response.send(trainData);
});

app.post("/arrivals", async (request, response) => {
  const arrivalStation = request.body.destinationStation;

  const api_url = `https://huxley2.azurewebsites.net/arrivals/${arrivalStation}?accessToken=${apiKeyNR}`;

  const fetch_response = await fetch(api_url);
  const trainData = await fetch_response.json();
  console.log(trainData);
  response.send(trainData);
});

//endpoint to send payslip data to database.
app.post("/payslipcreator", async (req, res) => {
  try {
    await mongoose.connect(uri);
    console.log("mongoose connected, create a payslip");

    const newPayslip = new Payslip({
      user: req.body.user,
      date: req.body.date,
      netPay: req.body.netPay,
      basicPay: req.body.basicPay,
      totalPayment: req.body.totalPayment,
      incomeTax: req.body.incomeTax,
      nationalInsurance: req.body.nationalInsurance,
      pension: req.body.pension,
      totalDeductions: req.body.totalDeductions,
    });

    await newPayslip.save();
    console.log("payslip generated");
  } catch (err) {
    console.log(err, "failed to generate payslip");
  }
});

app.get("/formData", async (request, response) => {
  //query string defiend early as URI, did again here for clarity within this function
  const queryString = `mongodb+srv://${DBusername}:${pwd}@train-data.jizrg.mongodb.net/?retryWrites=true&w=majority`;

  //create new mongo client with the query string as the arguement
  const client = new MongoClient(queryString);

  //connect to database asynchronously
  await client.connect();

  //assign database to query
  const db = client.db("TrainData");

  //search collection within database and return all docs.
  db.collection("incidentforms")
    .find({ username: currentUser })
    .toArray((err, result) => {
      if (err) throw err;

      response.send(result);
    });
});

//endpoint to get payslip data from database
app.get("/payslipData", async (req, res) => {

  //query string defiend early as URI, did again here for clarity within this function
  const queryString = `mongodb+srv://${DBusername}:${pwd}@train-data.jizrg.mongodb.net/?retryWrites=true&w=majority`;

 // create new mongo client with the query string as the arguement
  const client = new MongoClient(queryString);

 // connect to database asynchronously
  try {
    await client.connect();
  } catch (error) {
    console.log(error);
  }

  //assign database to query
  const db = client.db("TrainData");

  //search collection within database and return all docs.
  db.collection("payslips")
    .find({ user: currentUser })
    .toArray((err, result) => {
      if (err) throw err;
      res.send(result);
      console.log("results: ", result);
    });



  


});
