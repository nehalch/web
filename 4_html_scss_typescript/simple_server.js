const express = require("express");
const app = express();

app.listen(3200, () => {
  console.log("Application started and Listening on port 3000");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/styles/style.css", (req, res) => {
  res.sendFile(__dirname + "./styles/style.css");
});

app.get("/scripts/main.js", (req, res) => {
  res.sendFile(__dirname + "./scripts/main.js");
});

app.get("/images/favicon.png", (req, res) => {
  res.sendFile(__dirname + "./images/favicon.png");
});
app.get("/images/firefox.png", (req, res) => {
  res.sendFile(__dirname + "./images/firefox.png");
});
app.get("/images/firefox2.png", (req, res) => {
  res.sendFile(__dirname + "./images/firefox2.png");
});