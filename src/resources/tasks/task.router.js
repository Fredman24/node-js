const router = require('express').Router({ mergeParams: true });
const Task = require('./task.model');
const tasksService = require('./task.service');

router.route('/').get(async (req, res) => {
  try {
    const tasks = await tasksService.getAll(req.params.boardId);
    res.json(tasks);
    res.status(200).send('OK');
  } catch (err) {
    res.status(404).send('Not found');
  }
});

router.route('/:taskId').get(async (req, res) => {
  try {
    const task = await tasksService.get(req.params.taskId);
    res.json(task);
    res.status(200).send('OK');
  } catch (err) {
    res.status(404).send('Not found');
  }
});

router.route('/').post(async (req, res) => {
  const task = await tasksService.create(
    new Task({
      title: req.body.title,
      order: req.body.order,
      description: req.body.description,
      userId: req.body.userId,
      boardId: req.params.boardId,
      columnId: req.body.columnId
    })
  );
  res.json(task);
});

router.route('/:taskId').put(async (req, res) => {
  const task = await tasksService.update(
    req.params.boardId,
    req.params.taskId,
    req.body
  );
  res.json(task);
});

router.route('/:taskId').delete(async (req, res) => {
  try {
    const task = tasksService.remove(req.params.boardId, req.params.taskId);
    res.json(task);
    res.status(200).send('OK');
  } catch (err) {
    res.status(404).send('Not found');
  }
});

module.exports = router;
