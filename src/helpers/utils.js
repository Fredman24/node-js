// const morgan = require('morgan');
// const {createWriteStream} = require('fs')
// app.use(morgan('combined', {stream: createWriteStream('app.log')}))

const logData = (req, res, next) => {
  const { url, query, body } = req;
  console.log(`URL: ${url}, BODY: ${JSON.stringify(body)}, 
     QUERY PARAMETERS: ${JSON.stringify(query)}`);
  next();
};

const handleErrors = (err, req, res, next) => {
  const { statusCode, message } = err;
  console.error(err.stack);
  res.status(statusCode || 500).send(message || 'Something broke');
  next();
};

const handleAsyncErrors = cb => async (res, req, next) => {
  try {
    return await cb(req, res, next);
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  logData,
  handleErrors,
  handleAsyncErrors
};
