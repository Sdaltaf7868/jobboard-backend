const express = require('express');
const app = express();
const cors = require('cors');
const jobs = require('./jobsdata'); // 
const mongoose = require('mongoose');
app.use(express.json());
app.use(cors()); // You can replace '*' with your frontend URL in production

app.get('/api/jobs', (req, res) => {
  res.json(jobs);
});
app.listen(process.env.PORT || 8000, () => {
  console.log(`Server is running on port ${process.env.PORT || 8000}`);
}); 
