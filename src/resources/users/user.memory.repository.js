const DB = require('../../common/dbUsers');

const newErr = new Error('User not found');
newErr.code = 404;

// плохо - прямая работа с бд (обычно работа с провайдером для бд)
// const getAll = async () => DB;
// const get = async id => DB.filter(el => el.id === id)[0];
// const create = async user => {
//   DB.push(user);
//   return get(user.id);
// }

const getAll = async () => DB.getAllUsers();

const get = async id => {
  const user = await DB.getUser(id);
  if (!user) {
    throw newErr;
  }
  // else if (user.length > 1) {
  //   throw new Error('DB is corrupted.')
  // }
  return user;
};

const create = async user => {
  return DB.createUser(user);
};

const update = async (id, user) => {
  return DB.updateUser(id, user);
};

const remove = async id => {
  return DB.removeUser(id);
};

module.exports = { getAll, get, create, update, remove };
