const dbTasks = require('../../common/dbTasks');

const getAll = async boardId => dbTasks.getAllTasksFromBoard(boardId);

const get = async id => dbTasks.getTask(id);

const create = async task => dbTasks.createTask(task);

const update = async (boardId, taskId, task) =>
  dbTasks.updateTask(boardId, taskId, task);

const remove = async (boardId, taskId) => dbTasks.removeTask(boardId, taskId);

module.exports = { getAll, get, create, update, remove };
