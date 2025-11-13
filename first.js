
const express = require('express');
const app = express();
const cors = require('cors');
const jobs = require('./jobsdata'); // 
app.use(express.json());



const corsOptions = {
  origin: 'https://jobboard-frontend-sable.vercel.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
};

app.use(cors(corsOptions));

app.get('/api/jobs', (req, res) => {
  res.json(jobs);
});
app.listen(process.env.PORT || 8000, () => {
  console.log(`Server is running on port ${process.env.PORT || 8000}`);
}); 

app.get('/', (req, res) => {
  res.send('Backend is running!');
});
