const express = require("express");

const router = express.Router();

const {
  createJob,
  getAllJobs,
  updateJob,
  deleteJob,
} = require("../controllers/jobController");


// POST -> Add Job
router.post("/", createJob);


// GET -> Get All Jobs
router.get("/", getAllJobs);


// PUT -> Update Job
router.put("/:id", updateJob);


// DELETE -> Delete Job
router.delete("/:id", deleteJob);


module.exports = router;