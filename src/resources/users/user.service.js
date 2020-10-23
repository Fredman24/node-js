const usersRepo = require('./user.DB.repository');
const createError = require('http-errors');
// const newErr = new Error('User not found');
// newErr.code = 404;

const getAll = () => usersRepo.getAll();

// const get = id => usersRepo.get(id);
const get = async id => {
  const user = await usersRepo.get(id);

  if (!user) {
    throw new createError.NotFound();
  }
  return user;
};

const create = user => usersRepo.create(user);

const update = (id, user) => usersRepo.update(id, user);

const remove = id => usersRepo.remove(id);

module.exports = { getAll, get, create, update, remove };
