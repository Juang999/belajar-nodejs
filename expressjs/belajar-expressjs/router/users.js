const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');


router.route('/users')
    .get(UserController.index)
    .post(UserController.store);

router.get('/users/create', UserController.create);

router.put('/users/:id', UserController.update);

router.get('/users/:id', UserController.show);

router.delete('/users/:id', UserController.destroy);

module.exports = router;