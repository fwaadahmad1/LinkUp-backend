const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Sample API route
app.get("/api/user", (req, res) => {
  res.json({ message: "Hello, world!" });
});

// Sample POST API route
app.post("/api/user", (req, res) => {
  const user = req.body;
  // Here you can add code to handle the user data, e.g., save it to a database
  res.json({ message: "User data received", user });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
