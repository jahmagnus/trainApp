import mongoose from "mongoose";
const { Schema } = mongoose;

const payslip = new Schema({
    user: string,
    date: string,
    netPay: string,
    basicPay: string,
    totalPayment: string,
    incomeTax: string,
    nationalInsurance: string,
    pension: string,
    totalDeductions: string
});

export default mongoose.model("Payslip", payslip);