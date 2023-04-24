const express = require("express");
const ALLOWED_IPS = ["127.0.0.1", "123.456.7.89"];
const api = express.Router();

const lessons = [
  { topic: "math", location: "Hendon", price: 100 },
  { topic: "math", location: "Colindale", price: 80 },
  { topic: "math", location: "Brent Cross", price: 90 },
  { topic: "math", location: "Golders Green", price: 120 },
];
api.get("/lessons", (req, res) => {
  //   res.send("This is the lessons page");
  res.send(lessons);
});

const users = {
  email: "user@email.com",
  password: "myPassword",
};

api.get("/users", (req, res) => {
  //   res.send("This is the users api");
  res.send(users);
});

module.exports = api;
