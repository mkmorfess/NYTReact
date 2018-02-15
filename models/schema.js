const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  url: {
    type: String,
    required: true
  }
});

var articles = mongoose.model("Articles", UserSchema);

module.exports = articles;