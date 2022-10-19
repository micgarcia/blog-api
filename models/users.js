const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UsersSchema = new Schema({
  name: { type: String, required: true, maxLength: 50},
  username: { type: String, required: true, maxLength: 50},
  password: { type: String, required: true, maxLength: 40},
})

module.exports = mongoose.model("Users", UsersSchema);