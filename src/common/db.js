const User = require('../resources/users/user.model');
const DB = [];

DB.push(new User(), new User(), new User());

const getAllUsers = async () => DB.slice(0);

const getUser = async id => DB.filter(el => el.id === id)[0];

const createUser = async user => {
  DB.push(user);
  return user;
};

const updateUser = async (id, user) => {
  const userToUpdate = DB.find(el => el.id === id);
  if (user.name) {
    userToUpdate.name = user.name;
  }
  if (user.login) {
    userToUpdate.login = user.login;
  }
  if (user.password) {
    userToUpdate.password = user.password;
  }
  DB.push(userToUpdate);
  return userToUpdate;
};

const removeUser = async id => {
  const userToRemove = DB.find(el => el.id === id);
  const idxToRemove = DB.findIndex(el => el.id === id);
  DB.splice(idxToRemove, 1);
  return userToRemove;
};

module.exports = { getAllUsers, getUser, createUser, updateUser, removeUser };
