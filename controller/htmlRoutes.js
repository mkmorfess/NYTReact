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

router.get("/", function(req, res){
	res.send("Works")
})

module.exports = router;