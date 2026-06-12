const express = require("express");
const cors = require("cors");
const jobRoutes = require("./routes/jobRoutes");
const authRoutes = require("./routes/authRoutes");
const atsRoutes = require("./routes/atsRoutes");
const authMiddleware = require("./middleware/authMiddleware");
require("dotenv").config();

const connectDB = require("./db"); // MongoDB connection

const app = express();
const PORT = process.env.PORT || 5000;

connectDB(); // Connect to MongoDB

// Middlewares
app.use(cors()); // Allow frontend to talk to backend
app.use(express.json()); // Parse incoming JSON body

// Auth routes
app.use("/api/auth", authRoutes);

// Protect jobs routes with authentication
app.use("/api/jobs", authMiddleware, jobRoutes);

// ATS routes (no auth required for demo, can add later)
app.use("/api/ats", atsRoutes);

// Test route
app.get("/", (req, res) => {
  res.json({ message: "Backend is running! 🚀" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

console.log("HF Key loaded:", !!process.env.HUGGING_FACE_API_KEY);
