const boardsRepo = require('./board.DB.repository');
const tasksRepo = require('../tasks/task.DB.repository');

const getAll = () => boardsRepo.getAll();

const get = id => boardsRepo.get(id);

const create = board => boardsRepo.create(board);

const update = (id, user) => boardsRepo.update(id, user);

const remove = async id => {
  await boardsRepo.removeBoard(id);
  await tasksRepo.removeTasks(id);
};

module.exports = { getAll, get, create, update, remove };
