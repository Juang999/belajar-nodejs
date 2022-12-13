const express = require('express')
const router = express.Router()
const controllers = require('../app/Http/Controllers/Controllers')


router.route('/student')
    .get(controllers.StudentController.index)
    // .post(controllers.StudentController.create)


module.exports = router;