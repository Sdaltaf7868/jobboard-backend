const express = require('express');
const cors = require('cors');
const app = express();
const jobs = require('./jobsdata');

app.use(express.json());

// ✅ Enable CORS for both frontend & localhost
app.use(cors({
  origin: ['https://jobboard-frontend-sable.vercel.app', 'http://localhost:5173'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));

// ✅ Handle preflight requests manually (important for Render)
app.options('*', cors());

// ✅ API Routes
app.get('/api/jobs', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://jobboard-frontend-sable.vercel.app');
  res.json(jobs);
});

app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// ✅ Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
