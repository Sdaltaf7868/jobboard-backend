const express = require('express');
const app = express();
const cors = require('cors');
const jobs = require('./jobsdata'); // 
const mongoose = require('mongoose');
app.use(express.json());
app.use(cors({
  origin: '*', // You can replace '*' with your frontend URL in production
}));

app.get('/api/jobs', (req, res) => {
  res.json(jobs);
});
app.get('/', (req, res) => {
  res.send('Backend is working!');
});
module.exports = app;
