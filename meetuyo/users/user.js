const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullname: {
    type: String
  },

  username: {
    type: String,
    unique: true
  },

  email: {
    type: String
  },

  password: {
    type: String
  }
});


const User = mongoose.model('myuser', userSchema);
module.exports = User;
