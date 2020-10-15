const boardsRepo = require('./board.memory.repository');
const tasksRepo = require('../tasks/task.memory.repository');

const getAll = () => boardsRepo.getAll();

const get = id => boardsRepo.get(id);

const create = board => boardsRepo.create(board);

const update = (id, user) => boardsRepo.update(id, user);

const remove = async id => {
  await boardsRepo.removeBoard(id);
  await tasksRepo.removeTasks(id);
};

module.exports = { getAll, get, create, update, remove };
