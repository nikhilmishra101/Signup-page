const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
var path = require("path");

const app = express();

app.use("/css", express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/signup.html");
});
app.listen(3000, function (req, res) {
  console.log("Server is running on port 3000");
});
