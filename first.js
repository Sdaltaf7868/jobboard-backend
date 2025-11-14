const express = require('express');
const cors = require('cors');
const app = express();
const jobs = require('./jobsdata');

app.use(express.json());

// ✅ Add all your frontend URLs here
const corsOptions = {
  origin: [
    'https://jobboard-frontend-sable.vercel.app',
    'https://jobboard-frontend-git-main-sdaltaf7868s-projects.vercel.app',
    'https://jobboard-frontend-7jla3q65b-sdaltaf7868s-projects.vercel.app', // ✅ Add this
    'http://localhost:5173'

  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // <-- handles preflight requests

// ✅ Routes
app.get('/api/jobs', (req, res) => {
  res.json(jobs);
});

app.get('/', (req, res) => {
  res.send('Backend is running!');
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
