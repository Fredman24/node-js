const createError = require('http-errors');
const usersRepo = require('./user.DB.repository');
const { hashPassword } = require('../../helpers/hash');

const getAll = () => usersRepo.getAll();

const getById = async id => {
  const user = await usersRepo.getById(id);

  if (!user) {
    throw new createError.NotFound();
  }
  return user;
};

const getByLogin = login => usersRepo.getByLogin(login);

const create = async user => {
  const password = { user };
  const hashedPassword = await hashPassword(password);
  const userWithHash = {
    ...user,
    password: hashedPassword
  };
  return await usersRepo.create(userWithHash);
};

const update = (id, user) => usersRepo.update(id, user);

const remove = id => usersRepo.remove(id);

// const removeAll = () => usersRepo.removeAll();

module.exports = { getAll, getById, create, update, remove, getByLogin };
