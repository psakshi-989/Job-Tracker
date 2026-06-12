const express = require("express");
const router = express.Router();
const { analyzeATS, parseResume } = require("../controllers/atsController");
const multer = require("multer");

// Configure multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype === "application/pdf") {
      cb(null, true);
    } else {
      cb(new Error("Only PDF files are allowed"), false);
    }
  },
});

// Routes
router.post("/analyze", analyzeATS);
router.post(
  "/parse-resume",
  (req, res, next) => {
    console.log("Parse resume route hit");
    console.log("Request headers:", req.headers);
    console.log("Request body:", req.body);
    next();
  },
  upload.single("resume"),
  (req, res, next) => {
    console.log("After multer middleware");
    console.log("File in request:", req.file);
    next();
  },
  parseResume,
);

module.exports = router;
