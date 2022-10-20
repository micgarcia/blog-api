const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UsersSchema = new Schema({
  username: { type: String, required: true, maxLength: 50},
  password: { type: String, required: true, maxLength: 40},
  name: { type: String, required: true, maxLength: 50}
})

module.exports = mongoose.model("Users", UsersSchema);