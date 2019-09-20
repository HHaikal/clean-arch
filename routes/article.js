const router = require('express').Router()

// callback
const callback = require('../services/callback')

// controller
const {
	list
} = require('../controllers/article')

// route pattern 
router.get('/', callback(list))

module.exports = router