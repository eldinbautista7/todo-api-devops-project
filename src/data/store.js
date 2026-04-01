// src/data/store.js
let tasks = [];
let nextId = 1;

const getAllTasks = () => tasks;

const addTask = (title) => {
  const task = { id: nextId++, title, done: false };
  tasks.push(task);
  return task;
};

const resetStore = () => {
  tasks = [];
  nextId = 1;
};

module.exports = { getAllTasks, addTask, resetStore };