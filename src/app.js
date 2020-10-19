const express = require('express');
const swaggerUI = require('swagger-ui-express');
const path = require('path');
const YAML = require('yamljs');
const userRouter = require('./resources/users/user.router');
const boardRouter = require('./resources/boards/board.router');
const taskRouter = require('./resources/tasks/task.router');
const { logData, handleErrors } = require('./helpers/utils');

const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.use(express.json());

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use(
  '/',
  (req, res, next) => {
    if (req.originalUrl === '/') {
      res.send('Service is running!');
      return;
    }
    next();
  },
  logData,
  handleErrors
);

process.on('unhandledRejection', reason => {
  console.log(
    `DEAR CROSS-CHECKER, ATTENTION! Unhandled Rejection at: ${reason.message ||
      reason}`
  );
});

process.on('uncaughtException', error => {
  console.error(
    `DEAR CROSS-CHECKER, ATTENTION! captured error: ${error.message}`
  );
});

app.use('/users', userRouter);
app.use('/boards', boardRouter);
boardRouter.use('/:boardId/tasks', taskRouter);

module.exports = app;
