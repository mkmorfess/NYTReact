const express = require("express");
const bodyParser = require("body-parser");
var routes = require("./controller/htmlRoutes.js")


// Init App
const app = express();

//Port
const PORT = process.env.PORT || 3001

//Body-Parser middleware

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use("/", routes)

app.listen(PORT, function(){
	console.log("Server Running on port: " + PORT)
})
