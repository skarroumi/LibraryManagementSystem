const express = require('express')
const router = express.Router()
const UserController = require('../controllers/UserController')
const {auth, authM} = require('../controllers/verifyToken')


//student register route
router.post('/student/register', UserController.studentRegisterPost)

//student login route
router.post('/student/login', UserController.studentLoginPost)

//manager login route
router.post('/manager/login', UserController.managerLoginPost)

//prohibit or authorize a student to borrow books
router.post('/manager/changeaccess', UserController.managerChangeAcess)


module.exports = router