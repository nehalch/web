const express = require("express");
const app = express();

app.listen(3300, () => {
  console.log("Application started and Listening on port 3000");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/hello.html");
});

app.get("/style.css", (req, res) => {
  res.sendFile(__dirname + "/style.css");
});

app.get("/123.png", (req, res) => {
  res.sendFile(__dirname + "/123.png");
});