const express = require('express');
const { TestController } = require('../app/http/controllers/Controller');
const expressMiddleware = express();
const router = express.Router();
const controllers = require("../app/http/controllers/Controller")
const middleware = require("../app/http/Middleware/TestMiddleware")



expressMiddleware.use('/api/user/:id', middleware.errMiddleware)
// withoutId
router.route('/user')
.get(controllers.TestController.index)
.post(controllers.TestController.store)

// withId
// const useMiddleware = [middleware.testMiddleware, middleware.testMIddleware2]
// function testMiddleware (req, res, next) {
//     console.log('hello world')
//     next()
// }
// function testMIddleware2 (req, res, next) {
//     console.log('hallo dunia')
//     next()
// }

const impMiddleware = [middleware.errMiddleware]
router.route('/user/:id')
    .get(impMiddleware, controllers.TestController.show)
    .put(controllers.TestController.update)
    .delete(controllers.TestController.destroy)
// router.get('/user/:id', impMiddleware, TestController.show)

module.exports = {router, expressMiddleware};