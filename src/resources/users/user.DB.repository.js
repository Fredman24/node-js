const User = require('./user.model');
// const Task = require('../tasks/task.model');

// в базу мы ходим через модель
const getAll = async () => User.find({});

const create = async user => User.create(user);

const get = async id => User.findById(id);

const update = async (id, user) => {
  await User.updateOne({ _id: id }, user);
  return get(id);
};

const remove = async id => {
  // Task.updateMany({userId: id}, {userId: null})
  User.deleteOne({ _id: id });
};
// const remove = async id => {
//   return (await User.deleteOne({_id: id})).deletedCount;
// }

module.exports = { getAll, create, get, remove, update };
