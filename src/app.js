const express = require('express');
const swaggerUI = require('swagger-ui-express');
const path = require('path');
const YAML = require('yamljs');
const userRouter = require('./resources/users/user.router');
const boardRouter = require('./resources/boards/board.router');
const taskRouter = require('./resources/tasks/task.router');
const { logInfo, logError, logProcessErrors } = require('./helpers/utils');

const app = express();

const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.use(express.json());

app.use(logInfo);

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/users', userRouter);
app.use('/boards', boardRouter);
boardRouter.use('/:boardId/tasks', taskRouter);

app.use('*', (req, res) => res.send('This page does not exist.'));

app.use(logError);

process.on('unhandledRejection', logProcessErrors);

process.on('uncaughtException', logProcessErrors);

// ПУНКТ 3
// throw Error('Oops!');

// ПУНКТ 4
// Promise.reject(Error('Oops!'));

module.exports = app;
