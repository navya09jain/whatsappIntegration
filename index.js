const express = require("express");
const axios = require("axios");
const app = express();
const dotenv = require("dotenv").config();

app.get("/", (req, res) => {
  res.send("Hello, Express Server!");
});

const accessToken = process.env.FACEBOOK_ACCESS_TOKEN;

const apiEndpoint = "https://graph.facebook.com/v17.0/117979374738349/messages";

const messageData = {
  messaging_product: "whatsapp",
  to: process.env.RECIPIENT_PHONE_NUMBER, // Replace with the recipient's phone number
  type: "template",
  template: {
    name: "hello_world",
    language: {
      code: "en_US",
    },
  },
};

const config = {
  headers: {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/json",
  },
};

axios
  .post(apiEndpoint, messageData, config)
  .then(response => {
    console.log("API response:", response.data);
  })
  .catch(error => {
    console.error("API error:", error);
  });

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
