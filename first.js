const express = require('express');
const cors = require('cors');
const app = express();
const jobs = require('./jobsdata');

app.use(express.json());

const corsOptions = {
  origin: [
    'https://jobboard-frontend-sable.vercel.app', // your deployed frontend
    'http://localhost:5173' // local frontend (for dev)
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

// Routes
app.get('/api/jobs', (req, res) => {
  res.json(jobs);
});

app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// Server start
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
