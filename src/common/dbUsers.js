const DB = require('./db');
const User = require('../resources/users/user.model');

const dbUsers = DB.users;
dbUsers.push(new User(), new User(), new User());

const getAllUsers = async () => dbUsers.slice(0);

const getUser = async id => dbUsers.filter(el => el.id === id)[0];

const createUser = async user => {
  dbUsers.push(user);
  return user;
};

const updateUser = async (id, user) => {
  const userToUpdate = dbUsers.find(el => el.id === id);
  if (user.name) {
    userToUpdate.name = user.name;
  }
  if (user.login) {
    userToUpdate.login = user.login;
  }
  if (user.password) {
    userToUpdate.password = user.password;
  }
  return userToUpdate;
};

const removeUser = async id => {
  const userToRemove = dbUsers.find(el => el.id === id);
  const idxToRemove = dbUsers.findIndex(el => el.id === id);
  DB.tasks.forEach(task => {
    if (task.userId === id) {
      task.userId = null;
    }
  });
  dbUsers.splice(idxToRemove, 1);
  return userToRemove;
};

module.exports = { getAllUsers, getUser, createUser, updateUser, removeUser };
