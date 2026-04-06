// src/app.js
const express = require('express');
const app = express();
const taskRoutes = require('./routes/tasks');

app.use(express.json());
app.use('/tasks', taskRoutes);

module.exports = app;