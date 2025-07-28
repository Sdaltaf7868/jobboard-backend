require('dotenv').config();

const mongoose = require('mongoose')
const job = require('./job.js');
const jobs = require('./jobsdata.js')

const connectDB = async () => {
    await mongoose.connect(process.env.MONGO_URL)
    console.log("Database connected successfully");
    await job.insertMany(jobs);
    console.log("Jobs inserted successfully");
    await mongoose.disconnect();
    console.log("Database disconnected successfully");
}
connectDB();