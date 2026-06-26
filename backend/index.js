// server.js
import express from "express";
import {connect} from "mongoose"
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });



// Middleware to parse JSON
app.use(express.json());

// Example route
app.get("/", (req, res) => {
  res.send("Hello, Express server is running!");
});

// Another sample route
app.post("/api/data", (req, res) => {
  const { name } = req.body;
  res.json({ message: `Received data for ${name}` });
});

// Start server
app.listen(PORT, () => {
  console.log(` hello world Server running on http://localhost:${PORT}`);
});
