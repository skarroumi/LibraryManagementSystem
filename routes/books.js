const express = require('express')
const router = express.Router()


//All Books route 
router.get('/', (req, res) => {
    res.render('books/index')
})

//New Book Route
router.get('/new', (req, res) => {
    res.render('books/new')
})

//Create Book Route
router.post('/', (req, res) => {
    res.send('Create')
})
module.exports = router