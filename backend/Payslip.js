import mongoose from "mongoose";
const { Schema } = mongoose;

const payslip = new Schema({
    user: String,
    date: String,
    netPay: String,
    basicPay: String,
    totalPayment: String,
    incomeTax: String,
    nationalInsurance: String,
    pension: String,
    totalDeductions: String
});

export default mongoose.model("Payslip", payslip);