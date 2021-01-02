const express = require('express')
const router = express.Router()
const BookController = require('../controllers/BookController')
const {auth, authM} = require('../controllers/verifyToken')


//All Books route 
router.get('/all', BookController.book_get_all)

//One Book Information route
router.get('/unique', BookController.book_get_one)

//Search for books
router.get('/search', BookController.book_search)

//Add New Book Route
router.post('/new', BookController.book_add_new_post)

//delete book route
router.post('/delete', BookController.book_delete_one)

//update book information route
router.post('/update', BookController.book_update_one)

//All borrowed Books route --------------------------------[I need to add the overdue]
router.get('/borrowed', BookController.book_get_all_borrowed)

//Fill in Book Information By sending ISBN to googleapis route
router.get('/new/autofill', BookController.book_add_new_post_autofill)


module.exports = router