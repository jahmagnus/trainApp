import mongoose from "mongoose";
const { Schema } = mongoose;

const accidentForm = new Schema({
  username: String,
  date: String,
  time: String,
  location: String,
  destination: String,
  headcode: String,
  origin: String,
  firstName: String,
  surname: String,
  jobTitle: String,
  homeDepot: String,
  isOffwork: String,
  managerName: String,
  reporterFirstName: String,
  reporterSurname: String,
  reporterJob: String,
  reporterHomeLocation: String,
  reporterManagerName: String,
  comment: String,
});

export default mongoose.model("AccidentForm", accidentForm);
