const DB = require('./db');

const dbTasks = DB.tasks;

const getAllTasksFromBoard = async boardId => {
  const tasks = dbTasks.filter(el => el.boardId === boardId);
  return tasks;
};

const getTask = async id => dbTasks.find(el => el.id === id);

const createTask = async task => {
  dbTasks.push(task);
  return task;
};

const updateTask = async (boardId, taskId, task) => {
  const taskToUpdate = dbTasks.find(
    el => el.id === taskId && el.boardId === boardId
  );
  taskToUpdate.title = task.title;
  taskToUpdate.order = task.order;
  taskToUpdate.description = task.description;
  return taskToUpdate;
};

const removeTask = async (boardId, taskId) => {
  const taskToRemove = dbTasks.find(
    el => el.id === taskId && el.boardId === boardId
  );
  const idxToRemove = dbTasks.findIndex(
    el => el.id === taskId && el.boardId === boardId
  );
  dbTasks.splice(idxToRemove, 1);
  return taskToRemove;
};

module.exports = {
  getAllTasksFromBoard,
  createTask,
  getTask,
  updateTask,
  removeTask
};
