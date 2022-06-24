import mongoose from 'mongoose'
const {Schema} = mongoose


const incidentForm = new Schema({
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
    wasReported: String,
    didAttend: String,
    abuseTypes: [{type: Boolean}],
    factors: {[type: String]},
    reporterFirstName: String,
    reporterSurname: String,
    reporterJob: String,
    reporterHomeLocation: String,
    reporterManagerName: String,
    comment: String
})

export default mongoose.model('IncidentForm', incidentForm)