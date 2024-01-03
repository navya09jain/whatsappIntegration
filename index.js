const express = require("express");
const bodyParser = require("body-parser");
const { getTextMessage, sendMessage } = require("./functions");

const app = new express().use(bodyParser.json());

app.get("/webhook", (req, res) => {
  console.log(req.query["hub.mode"]);
  res.send("hi");
});

app.post("/", (req, res) => {
  let data = getTextMessage("7989837678", "Welcome To My new Business whtsapp");
  sendMessage(data)
    .then(function (responce) {
      console.log("message send successfully");
      res.sendStatus(200);
      return;
    })
    .catch(function (err) {
      console.log(" it is errror inside catch" + err);
      res.sendStatus(500);
      return;
    });
});

app.listen(5000, () => {
  console.log("app is started in port 5000");
});
