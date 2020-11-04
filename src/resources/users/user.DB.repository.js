const User = require('./user.model');
const Task = require('../tasks/task.model');

// в базу мы ходим через модель
const getAll = async () => User.find({});

const create = async user => User.create(user);

const getById = async id => User.findById(id);

const getByLogin = async login => User.findOne({ login });

const update = async (id, user) => {
  await User.updateOne({ _id: id }, user);
  return getById(id);
};

const remove = async id => {
  await Task.updateMany({ userId: id }, { userId: null });
  await User.deleteOne({ _id: id });
  return null;
};

// const removeAll = async () => User.deleteMany();

module.exports = { getAll, getById, getByLogin, create, update, remove };
