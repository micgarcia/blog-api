const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CommentsSchema = new Schema({
  name: { type: String, required: true, maxLength: 50},
  text: { type: String, required: true, maxLength: 400},
  timestamp: { type: String, required: true, maxLength: 100},
  post: { type: Schema.Types.ObjectId, required: true, ref: "Posts"}
})

CommentsSchema.virtual("url").get(function() {
  return `/comments/${this._id}`;
})
