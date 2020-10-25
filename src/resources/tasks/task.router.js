const router = require('express').Router({ mergeParams: true });
const Task = require('./task.model');
const tasksService = require('./task.service');
const { handleAsyncErrors } = require('../../helpers/utils');

router.route('/').get(
  handleAsyncErrors(async (req, res) => {
    const tasks = await tasksService.getAll(req.params.boardId);
    res.json(tasks.map(Task.toResponse));
  })
);

router.route('/:taskId').get(
  handleAsyncErrors(async (req, res) => {
    const { taskId } = req.params;
    const task = await tasksService.get(taskId);
    res.json(Task.toResponse(task));
  })
);

router.route('/').post(
  handleAsyncErrors(async (req, res) => {
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
    res.json(Task.toResponse(task));
  })
);

router.route('/:taskId').put(
  handleAsyncErrors(async (req, res) => {
    const task = await tasksService.update(
      req.params.boardId,
      req.params.taskId,
      req.body
    );
    res.json(Task.toResponse(task));
  })
);

router.route('/:taskId').delete(
  handleAsyncErrors(async (req, res) => {
    await tasksService.remove(req.params.boardId, req.params.taskId);
    res.sendStatus(204);
  })
);

module.exports = router;
