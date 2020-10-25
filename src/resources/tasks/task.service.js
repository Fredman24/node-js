const createError = require('http-errors');
const tasksRepo = require('./task.DB.repository');

const getAll = boardId => tasksRepo.getAll(boardId);

const get = async id => {
  const task = await tasksRepo.get(id);
  if (!task) {
    throw new createError.NotFound();
  }
  return task;
};

const create = task => tasksRepo.create(task);

const update = (boardId, taskId, task) =>
  tasksRepo.update(boardId, taskId, task);

const remove = (boardId, taskId) => tasksRepo.remove(boardId, taskId);

module.exports = { getAll, get, create, update, remove };
