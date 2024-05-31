const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 8000;

app.use(bodyParser.json());

app.post("/login", (req, res) => {
  // Logic for user login
  res.send("Login endpoint");
});

app.post("/register", (req, res) => {
  // Logic for user registration
  res.send("Register endpoint");
});

app.listen(port, () => {
  console.log(`Auth service running on port ${port}`);
});
