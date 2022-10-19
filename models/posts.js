const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PostsSchema = new Schema({
  title: { type: String, required: true, maxLength: 100},
  text: { type: String, required: true},
  author: { type: Schema.Types.ObjectId, required: true, ref: "Users"}
})

PostsSchema.virtual("url").get(function() {
  return `/posts/${this._id}`;
})

module.exports = mongoose.model("Posts", PostsSchema);