const express = require('express')
const router = express.Router()
const { ensureAuthenticatedStudent, ensureAuthenticatedManager } = require('../config/auth')
const BookController = require('../controllers/BookController')


//All Books route 
router.get('/all', BookController.book_get_all)

//All borrowed Books route 
router.get('/borrowed', BookController.book_get_all_borrowed)

//Add New Book Route
router.post('/new', BookController.book_add_new_post)

//One Book Information route
router.get('/unique', BookController.book_get_one)

//delete book route
router.post('/delete', BookController.book_delete_one)


//Fill in Book Information By sending ISBN to googleapis route
router.get('/new/autofill', BookController.book_add_new_post_autofill)

//update book information route
router.post('/update', BookController.book_update_one)


module.exports = router