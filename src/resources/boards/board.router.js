const router = require('express').Router();
const Board = require('./board.model');
const boardsService = require('./board.service');

router.route('/').get(async (req, res) => {
  try {
    const boards = await boardsService.getAll();
    res.json(boards);
    res.status(200).send('OK');
  } catch (err) {
    res.status(404).send('Not found');
  }
});

router.route('/:id').get(async (req, res) => {
  try {
    const board = await boardsService.get(req.params.id);
    res.json(board);
    res.status(200).send('OK');
  } catch (err) {
    res.status(404).send('Not found');
  }
});

router.route('/').post(async (req, res) => {
  const board = await boardsService.create(
    new Board({
      title: req.body.title,
      columns: req.body.columns
    })
  );
  res.json(board);
});

router.route('/:id').put(async (req, res) => {
  const board = await boardsService.update(req.params.id, req.body);
  res.json(board);
});

router.route('/:id').delete(async (req, res) => {
  try {
    const board = boardsService.remove(req.params.id);
    res.json(board);
    res.status(200).send('OK');
  } catch (err) {
    res.status(404).send('Not found');
  }
});

module.exports = router;
