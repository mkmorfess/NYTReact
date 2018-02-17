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

router.get("/api/articles", function(req, res){
	res.json("Works")
})

module.exports = router;