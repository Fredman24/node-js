const bcrypt = require('bcrypt');
const { SALT_ROUNDS } = require('../common/config');

const hashPassword = async password => {
  try {
    const salt = await bcrypt.genSalt(SALT_ROUNDS);
    return await bcrypt.hash(password, salt);
  } catch (err) {
    throw new Error(err);
  }
};

const checkPassword = async (password, hash) => {
  try {
    return await bcrypt.compare(password, hash);
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  hashPassword,
  checkPassword
};
