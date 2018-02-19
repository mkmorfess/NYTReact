const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");

const databaseUrl = process.env.MONGODB_URI ||'mongodb://localhost:27017/Articles';
//
mongoose.Promise = Promise;
mongoose.connect(databaseUrl);

const db = require("./../models/schema.js")

db.on("error", function(error) {
  console.log("Database Error:", error);
});

router.post("/api/articles/:id", function(req, res){
  db.create({
    title: req.body.title,
    url: req.body.link,
    date: req.body.date
  }, function(err, data){
    if (err) {
      console.log(err)
    } else {
      res.json(data)
    }
  })
  
})

router.get("/api/articles/", function(req, res){
  db.find({}, function(err, data){
    if (err) {
      console.log("This is an error: " + err)
    } else {
      res.json(data)
    }
  })
  
})

router.delete("/api/articles/:id", function(req, res){
  db.findByIdAndRemove({_id: req.params.id}, function(err, data){
    if (err) {
      console.log(err)
    }
    else {
      res.json(data)
    }
  })
})

module.exports = router;