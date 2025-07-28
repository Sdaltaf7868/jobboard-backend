const express = require('express');
const app = express();
const cors = require('cors');
const jobs = require('./jobsdata'); // 
app.use(express.json());
app.use(cors()); // You can replace '*' with your frontend URL in production

app.get('/api/jobs', (req, res) => {
  res.json(jobs);
});


module.exports = app; // Export the app for testing or further configuration