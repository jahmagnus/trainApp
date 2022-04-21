import mongoose from 'mongoose'
const {Schema} = mongoose

const user = new Schema({
    username: String,
    password: String,
    firstName: String,
    surname: String,
    payNumber: String,
    role:  String
})


 export default mongoose.model('User', user)