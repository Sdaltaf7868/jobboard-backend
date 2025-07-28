const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },           // e.g., "Frontend Developer"
  company: { type: String, required: true },         // e.g., "Google"
  experience: { type: String, required: true },      // e.g., "2+ years", "Fresher"
  mode: { type: String, required: true },            // e.g., "Remote", "In-office"
  skills: { type: [String], required: true },        // e.g., ["React", "CSS"]
  postedDate: { type: Date, default: Date.now }
});

const Job = mongoose.model('Job', jobSchema);
module.exports = Job;
