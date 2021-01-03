const express = require('express')
const router = express.Router()
const RequestController = require('../controllers/RequestController')
const {auth, authM} = require('../controllers/verifyToken')


//borrow book route 
router.post('/borrow',auth, RequestController.borrowRequest)

//return book route
router.post('/return',auth, RequestController.returnRequest)

//create unavailability request (special request) route (in case search for a book doesn't return any result, student can submit a request with a description containing the name of the book he/she wants)
router.post('/special',auth, RequestController.unavailabilityRequest)

//get unavailability requests (managers can see the requests of unavailable books to respond to them)
router.get('/special',authM, RequestController.showSpecial)

//add student to waitlist when a book is not available for borrowing (student will be able to place himself in a waitlist if a book is already borrowed)
router.post('/borrow/waitlist/',auth, RequestController.waitListHandling)


module.exports = router