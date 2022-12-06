const fakeData = [
    {id: 1, name: "Bangkit Juang Raharjo", email: "juangraharjo03@gmail.com"},
    {id: 2, name: "Ismail Nur Alam", email: "ismailnuralam@gmail.com"},
]

const controllers = {
    index: (req, res) => {
        res.json({
            status: "success",
            message: "success to get data",
            data: fakeData
        })
    },
    show: (req, res) => {
        fakeData.forEach(value => {
            if (value.id == req.params.id) {
                res.json({
                    status: "success",
                    message: "success to get detail data",
                    value: value
                })
            }
        })
    },
    store: (req, res) => {
        try {
            fakeData.push(req.body)

            res.json({
                status: "success",
                message: "success to store data",
                data: req.body,
            })
        } catch (err) {
            res.json({
                status: "failed",
                message: "failed to post data",
                error: err.message
            })
        }
    },
    update: (req, res) => {
        try {
            fakeData.forEach(value => {
                if (value.id == req.params.id) {
                    value.name = req.body.name,
                    value.email = req.body.email
                
                    res.json({
                        status: "success",
                        message: "success to update data",
                        result: value
                    })
                }
            })

        } catch (err) {
            res.json({
                status: "failed",
                message: "failed to update data",
                error: err.message
            })
        }
    },
    destroy: (req, res) => {
        try {
            fakeData.forEach(value => {
                if (value.id == req.params.id) {
                    fakeData.splice(fakeData.indexOf(value), 0)

                    res.json({
                        status: "success",
                        message: "succcess to delete data",
                        result: true
                    })
                }
            })
        } catch (err) {
            res.json({
                status: "failed",
                message: "failed to delete data",
                error: err.message
            })
        }
    }
}

module.exports = controllers