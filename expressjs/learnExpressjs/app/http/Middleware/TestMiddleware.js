const middleware = {
    testMiddleware: (req, res, next) =>  {
        console.log('hello world')
        next()
    },
    testMIddleware2: (req, res, next) => {
        console.log('hallo dunia')
        next()
    },
    errMiddleware: (req, res, err, next) => {
        console.log(err.stack)
        res.status(500).json({
            status: "gagal",
            message: "testing error middleware"
        })
    }
}

module.exports = middleware;