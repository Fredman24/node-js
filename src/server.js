const mongoose = require('mongoose');
const { PORT, MONGO_CONNECTION_STRING } = require('./common/config');
const app = require('./app');
const { logger } = require('./helpers/utils');

mongoose.connect(MONGO_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true
  // useFindAndModify: false
});

const db = mongoose.connection;
db.on('error', () => logger.error('DB connection error')).once('open', () => {
  logger.info('Successfully connected to DB');
  app.listen(PORT, () => {
    logger.info(`App is running on http://localhost:${PORT}`);
  });
});
