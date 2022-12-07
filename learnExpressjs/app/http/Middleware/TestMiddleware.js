const middleware = {
    testMiddleware: (req, res, next) =>  {
        console.log('hello world')
        next()
    },
    testMIddleware2: (req, res, next) => {
        console.log('hallo dunia')
        next()
    }
}

module.exports = middleware;