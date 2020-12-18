const express = require('express')
const router = express.Router()

//register page
router.get('/register', (req, res) => 
res.render('register')
)

//login page
router.get('/login', (req, res) => 
res.render('login')
)

module.exports = router