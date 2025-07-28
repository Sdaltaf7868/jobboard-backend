const express = require('express');
const app = express();
const cors = require('cors');
const jobs = require('./jobsdata'); // 
const mongoose = require('mongoose');
app.use(cors());

app.use(express.json());
// Route to get all jobs

app.get('/api/jobs', (req, res) => {
  res.json(jobs);
});
app.get('/', (req, res) => {
  res.send('Backend is working!');
});
// Route to handle login data
// ✅ ADD this instead:
module.exports = app;
