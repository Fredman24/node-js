const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');
const { handleAsyncErrors } = require('../../helpers/errors');

router.route('/').get(
  handleAsyncErrors(async (req, res) => {
    const users = await usersService.getAll();
    // map user fields to exclude secret fields like "password"
    res.json(users.map(User.toResponse));
  })
);

router.route('/:id').get(
  handleAsyncErrors(async (req, res) => {
    const user = await usersService.getById(req.params.id);
    res.json(User.toResponse(user));
  })
);

router.route('/').post(
  handleAsyncErrors(async (req, res) => {
    const user = await usersService.create(
      new User({
        login: req.body.login,
        password: req.body.password,
        name: req.body.name
      })
    );
    res.json(User.toResponse(user));
  })
);

router.route('/:id').put(
  handleAsyncErrors(async (req, res) => {
    const user = await usersService.update(req.params.id, req.body);
    res.json(User.toResponse(user));
  })
);

router.route('/:id').delete(
  handleAsyncErrors(async (req, res) => {
    await usersService.remove(req.params.id);
    res.sendStatus(204);
  })
);

// router.route('/').delete(
//   handleAsyncErrors(async (req, res) => {
//     await usersService.removeAll();
//     res.sendStatus(204);
//   })
// );

module.exports = router;
