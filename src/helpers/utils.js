const { createLogger, format, transports } = require('winston');
const path = require('path');

const logger = createLogger({
  level: 'silly',
  transports: [
    new transports.Console(),
    new transports.File({
      filename: path.join(__dirname, '../../logs/error.log'),
      level: 'error',
      format: format.combine(format.timestamp(), format.json())
    }),
    new transports.File({
      filename: path.join(__dirname, '../../logs/info.log'),
      level: 'info',
      format: format.combine(format.timestamp(), format.json())
    })
  ]
});

const logInfo = (req, res, next) => {
  logger.info(
    `Url: ${req.url}, Params: ${JSON.stringify(
      req.params
    )}, Body: ${JSON.stringify(req.body)}`
  );
  next();
};

const logError = (err, req, res, next) => {
  logger.error(
    `ERROR: ${err.code || 500} ${err.message || 'Internal Server Error'}, 
    Details: ${err.stack}`
  );
  next(err);
};

const logProcessErrors = (message, err) => {
  logger.error(
    `DEAR CROSS-CHECKER, ATTENTION! Error: ${err.code || 500} ${message}`
  );
};

// const logData = (req, res, next) => {
//   const { url, query, body } = req;
//   console.log(`URL: ${url}, BODY: ${JSON.stringify(body)},
//      QUERY PARAMETERS: ${JSON.stringify(query)}`);
//   next();
// };

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
  logger,
  logInfo,
  logError,
  logProcessErrors,
  handleAsyncErrors
};
