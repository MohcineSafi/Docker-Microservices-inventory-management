const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 8003;

app.use(bodyParser.json());

app.post("/stock", (req, res) => {
  // Logic for updating stock
  res.send("Stock updated");
});

app.get("/stock", (req, res) => {
  // Logic for fetching stock
  res.send("Stock levels");
});

app.listen(port, () => {
  console.log(`Stock service running on port ${port}`);
});
