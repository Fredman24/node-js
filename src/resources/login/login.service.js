const createError = require('http-errors');
const jwt = require('jsonwebtoken');
const { JWT_SECRET_KEY } = require('../../common/config');
const { checkPassword } = require('../../helpers/hash');
const userRepo = require('../users/user.DB.repository');

const signToken = async (login, password) => {
  const user = await userRepo.getByLogin(login);
  if (!user) {
    throw new createError.NotFound();
  } else {
    const { password: hashedPassword } = user;
    const isEqualPassword = await checkPassword(password, hashedPassword);
    if (!isEqualPassword) {
      throw new createError.Forbidden();
    }
    return await jwt.sign({ id: user._id, login }, JWT_SECRET_KEY);
  }
};

module.exports = { signToken };
