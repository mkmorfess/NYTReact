const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");

const databaseUrl = process.env.MONGODB_URI ||'mongodb://localhost:27017/drawings';

mongoose.Promise = Promise;
mongoose.connect(databaseUrl);

const db = require("./../models/schema.js")

db.on("error", function(error) {
  console.log("Database Error:", error);
});

router.post("/api/articles/:id", function(req, res){
  console.log(req.params.id)
  console.log(req.body.title)
  console.log(req.body.link)
  console.log(req.body.date)
  res.end();
})

module.exports = router;