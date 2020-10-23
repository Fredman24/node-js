// const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: String,
    login: String,
    password: String
  }
  // { collection: 'users', versionKey: false },
);

// userSchema.static.toResponse = user => {
//   const { id, name, login } = user;
//   return { id, name, login };
// }

const toResponse = user => {
  const { id, name, login } = user;
  return { id, name, login };
};

const User = mongoose.model('users', userSchema);

module.exports = { User, toResponse };

// class UserC {
//   constructor({
//     id = uuid(),
//     name = 'USER',
//     login = 'user',
//     password = 'P@55w0rd'
//   } = {}) {
//     this.id = id;
//     this.name = name;
//     this.login = login;
//     this.password = password;
//   }

// static toResponse(user) {
//   const { id, name, login } = user;
//   return { id, name, login };
// }

//   static fromResponse(body) {
//     return new User(body);
//   }
// }
