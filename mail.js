const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  password: String, // (In production: always hash this)
});

module.exports = mongoose.model('User', userSchema);
