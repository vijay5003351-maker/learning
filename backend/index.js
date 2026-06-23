// server.js
import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

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
  console.log(`🚀from staging Server running on http://localhost:${PORT}`);
});
