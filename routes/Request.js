const express = require('express')
const router = express.Router()
const RequestController = require('../controllers/RequestController')

//borrow book route
router.post('/borrow', RequestController.borrowRequest)

//return book route
router.post('/return', RequestController.returnRequest)

//create unavailability request (special request) route
router.post('/special', RequestController.unavailabilityRequest)

module.exports = router