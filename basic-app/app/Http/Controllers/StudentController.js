const Student = require('../../../models/student')

const constroller = {
    index: (req, res) => {
        try {
            let data = Student.findAll()

            res.status(200)
                .json({
                    status: 'success',
                    message: 'success to get data',
                    result: data
                })
        } catch (err) {
            res.status(400)
                .json({
                    status: 'failed',
                    message: 'failed to get data',
                    result: err.message
                })
        }
    },
    create: (req, res) => {
        try {
            const student = Student.create({
                name: req.body.name,
                class: req.body.class,
                age: req.body.age
            })

            res.status(200)
                .json({
                    status: 'success',
                    message: 'success to create student',
                    data: student
                })
        } catch (err) {
            res.status(400)
                .json({
                    status: 'failed',
                    message: 'failed to create student',
                    error: err.message
                })
        }
    }
}

module.exports = constroller