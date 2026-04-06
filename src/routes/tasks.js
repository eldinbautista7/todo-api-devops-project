// src/routes/tasks.js
const express = require('express');
const router = express.Router();
const { getAllTasks, addTask } = require('../data/store');

// GET /tasks - returns all tasks
router.get('/', (req, res) => {
  const tasks = getAllTasks();
  res.status(200).json(tasks);
});

// POST /tasks
router.post('/', (req, res) => {
  const { title } = req.body;
  if (!title || title.trim() === '') {
    return res.status(400).json({ error: 'Title is required' });
  }
  const task = addTask(title);
  res.status(200).json(task);
});

module.exports = router;