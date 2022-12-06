const express = require('express');
const router = express.Router();
const controllers = require("../app/http/controllers/Controller")

router.get('/', controllers.TestController.index)
router.get('/:id', controllers.TestController.show)
router.post('/', controllers.TestController.store)
router.put('/:id', controllers.TestController.update)
router.delete('/:id', controllers.TestController.destroy)

module.exports = router;