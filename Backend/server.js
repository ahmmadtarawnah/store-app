const express = require("express");
const cors = require("cors");
const axios = require("axios");
// Create express app
const app = express();
const port = 3001;
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running on port 3001");
});

app.get("/api/products", async (req, res) => {
  try {
    response = await axios.get("https://fakestoreapi.com/products");
    res.json(response.data);
  } catch (error) {
    console.log("There was an error (Server)", error);
    res.status(500).json({ message: "Error fetching products" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on this http://localhost:${port}`);
});
