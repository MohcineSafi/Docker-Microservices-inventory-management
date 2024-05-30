const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 8002;

app.use(bodyParser.json());

app.post("/orders", (req, res) => {
  // Logic for creating an order
  res.send("Order created");
});

app.get("/orders", (req, res) => {
  // Logic for fetching orders
  res.send("Orders list");
});

app.listen(port, () => {
  console.log(`Order service running on port ${port}`);
});
