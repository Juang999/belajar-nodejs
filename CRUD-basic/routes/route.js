const { Router } = require('express');
const HomeController = require('../Controllers/HomeController');
const router = Router();

router.get('/', HomeController.index);
router.get('/:id', HomeController.show);
router.post('/', HomeController.create);
router.put('/:id', HomeController.update);
router.delete('/:id', HomeController.destroy);


module.exports = router;