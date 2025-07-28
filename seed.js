const mangooseeds = require('mongoose')
const job = require('./job.js');
const jobs = require('./jobsdata.js')

const connectDB = async () => {
    await mangooseeds.connect('mongodb://localhost:27017/jobportal')
    console.log("Database connected successfully");
    await job.insertMany(jobs);
    console.log("Jobs inserted successfully");
    await mangooseeds.disconnect();
    console.log("Database disconnected successfully");
}
connectDB();