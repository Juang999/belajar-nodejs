const express = require('express');
const expressMiddleware = express();
const router = express.Router();
const controllers = require("../app/http/controllers/Controller")
const middleware = require("../app/http/Middleware/TestMiddleware")



expressMiddleware.use('/api/user', middleware.testMiddleware)
// withoutId
router.route('/user')
    .get(controllers.TestController.index)
    .post(controllers.TestController.store)

// withId
router.route('/user/:id')
    .get(controllers.TestController.show)
    .put(controllers.TestController.update)
    .delete(controllers.TestController.destroy)

module.exports = {router, expressMiddleware};