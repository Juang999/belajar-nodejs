const express = require('express')
const router = express.Router()

const controller = {
    TestController: require('./Api/TestController')
}

module.exports = controller;