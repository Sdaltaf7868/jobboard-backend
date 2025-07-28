const express = require('express');
const app = express();
const cors = require('cors');
const jobs = require('./jobsdata'); // 
const mongoose = require('mongoose');
app.use(cors());

app.use(express.json());
// Route to get all jobs
app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
app.get('/api/jobs', (req, res) => {
  res.json(jobs);
});
// Route to handle login data
