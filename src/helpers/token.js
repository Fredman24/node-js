const jwt = require('jsonwebtoken');
const { JWT_SECRET_KEY, PATH_WHITELIST } = require('../common/config');

const checkToken = async (req, res, next) => {
  if (PATH_WHITELIST.includes(req.path)) {
    return next();
  }

  const headerAuth = req.header('Authorization');
  if (headerAuth !== undefined) {
    const [scheme, token] = headerAuth.split(' ');
    if (scheme !== 'Bearer') {
      res.status(401).send('Unauthorized user!');
    } else {
      await jwt.verify(token, JWT_SECRET_KEY);
      return next();
    }
  }
  res.status(401).send('Unauthorized user!');
};

module.exports = { checkToken };
