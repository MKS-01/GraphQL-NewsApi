const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookmarkSchema = new mongoose.Schema({
  bookmarkID: {
    type: Schema.Types.ObjectId,
    require: true,
  },
  author: {
    type: String,
    require: true,
  },
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  url: {
    type: String,
    require: true,
  },
  urlToImage: {
    type: String,
    // require: true,
  },
  publishedAt: {
    type: String,
    require: true,
  },
  content: {
    type: String,
  },
});

const Bookmark = mongoose.model("bookmark", bookmarkSchema);

module.exports = { Bookmark };
