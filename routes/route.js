const express = require('express')
const router = express.Router()
const controller = require('../controllers/controls')

router.get('/', controller.home)

module.exports = router