// src/routes/tasks.js
const express = require('express');
const router = express.Router();
const { getAllTasks } = require('../data/store');

// GET /tasks - returns all tasks
router.get('/', (req, res) => {
  const tasks = getAllTasks();
  res.status(200).json(tasks);
});

module.exports = router;