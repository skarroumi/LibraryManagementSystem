const express = require('express')
const router = express.Router()
const RequestController = require('../controllers/RequestController')
const {auth, authM} = require('../controllers/verifyToken')


//borrow book route -------------------------------------------[I need to add the date]
router.post('/borrow', RequestController.borrowRequest)

//return book route
router.post('/return', RequestController.returnRequest)

//create unavailability request (special request) route
router.post('/special', RequestController.unavailabilityRequest)

//get unavailability requests
router.get('/special', RequestController.showSpecial)

//add student to waitlist when a book is not available for borrowing
router.post('/borrow/waitlist/', RequestController.waitListHandling)


module.exports = router