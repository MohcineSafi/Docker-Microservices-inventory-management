const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 8001;

app.use(bodyParser.json());

app.post("/products", (req, res) => {
  // Logic for creating a product
  res.send("Product created");
});

app.get("/products", (req, res) => {
  // Logic for fetching products
  res.send("Products list");
});

app.listen(port, () => {
  console.log(`Product service running on port ${port}`);
});
