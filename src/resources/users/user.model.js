const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: String,
    login: String,
    password: String
  },
  { versionKey: false }
);

userSchema.static('toResponse', user => {
  const { id, name, login } = user;
  return { id, name, login };
});

const User = mongoose.model('users', userSchema);

module.exports = User;

//   static fromResponse(body) {
//     return new User(body);
//   }
