const Task = require('./task.model');

const getAll = async boardId => Task.find({ boardId });

const get = async id => Task.findById(id);

const create = async task => Task.create(task);

const update = async (boardId, taskId, task) => {
  await Task.updateOne({ _id: taskId }, task);
  return get(taskId);
};

const remove = async (boardId, taskId) => Task.deleteOne({ _id: taskId });

const removeTasks = async boardId => Task.deleteMany({ boardId });

module.exports = { getAll, get, create, update, remove, removeTasks };
