const express = require('express');
const app = express();
const cors = require('cors');
const jobs = require('./jobsdata'); // 
const mongoose = require('mongoose');
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // or restrict to your frontend domain
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

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
