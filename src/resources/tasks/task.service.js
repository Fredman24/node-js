const tasksRepo = require('./task.DB.repository');

const getAll = boardId => tasksRepo.getAll(boardId);

const get = id => tasksRepo.get(id);

const create = task => tasksRepo.create(task);

const update = (boardId, taskId, task) =>
  tasksRepo.update(boardId, taskId, task);

const remove = (boardId, taskId) => tasksRepo.remove(boardId, taskId);

module.exports = { getAll, get, create, update, remove };
