const router = require('express').Router();
const Board = require('./board.model');
const boardsService = require('./board.service');
const { handleAsyncErrors } = require('../../helpers/utils');

router.route('/').get(
  handleAsyncErrors(async (req, res) => {
    const boards = await boardsService.getAll();
    res.json(boards);
  })
);

router.route('/:id').get(
  handleAsyncErrors(async (req, res) => {
    const { id } = req.params;
    const board = await boardsService.get(id);
    if (board) {
      res.json(board);
    } else {
      res.status(404).send('Not found');
    }
  })
);

router.route('/').post(
  handleAsyncErrors(async (req, res) => {
    const board = await boardsService.create(
      new Board({
        title: req.body.title,
        columns: req.body.columns
      })
    );
    res.json(board);
  })
);

router.route('/:id').put(
  handleAsyncErrors(async (req, res) => {
    const board = await boardsService.update(req.params.id, req.body);
    res.json(board);
  })
);

router.route('/:id').delete(
  handleAsyncErrors(async (req, res) => {
    await boardsService.remove(req.params.id);
    res.sendStatus(204);
  })
);

module.exports = router;
