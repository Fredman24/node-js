// const handleErrors = (err, req, res, next) => {
//   const { statusCode, message } = err;
//   console.error(err.stack);
//   res.status(statusCode || 500).send(message || 'Something broke');
//   next();
// };

const handleAsyncErrors = cb => async (req, res, next) => {
  try {
    return await cb(req, res, next);
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  handleAsyncErrors
};
