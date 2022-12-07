const middleware = {
    testMiddleware: (req, res, next) =>  {
        console.log('hello world')
        next()
    }
}

module.exports = middleware;