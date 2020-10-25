const createError = require('http-errors');
const boardsRepo = require('./board.DB.repository');
const tasksRepo = require('../tasks/task.DB.repository');

const getAll = () => boardsRepo.getAll();

const get = async id => {
  const board = await boardsRepo.get(id);
  if (!board) {
    throw new createError.NotFound();
  }
  return board;
};

const create = board => boardsRepo.create(board);

const update = (id, user) => boardsRepo.update(id, user);

const remove = async id => {
  await boardsRepo.removeBoard(id);
  await tasksRepo.removeTasks(id);
};

module.exports = { getAll, get, create, update, remove };
