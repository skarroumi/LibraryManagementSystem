const express = require('express')
const router = express.Router()
const BookController = require('../controllers/BookController')
const {auth, authM} = require('../controllers/verifyToken')


//All Books route (for students to display all books in the library)
router.get('/all', auth, BookController.book_get_all)

//One Book Information route (display information of one specific book)
router.get('/unique',auth,  BookController.book_get_one)

//Search for books (search for books using ISBN, author or title)
router.get('/search',auth, BookController.book_search)

//Add New Book Route (for the manager to add a new book)
router.post('/new',authM, BookController.book_add_new_post)

//delete book route
router.delete('/delete',authM, BookController.book_delete_one)

//update book information route (update multiple book information[author, category, description....])
router.put('/update',authM, BookController.book_update_one)

//All borrowed Books route (manager can see which books are borrowed at the moment)
router.get('/borrowed',authM, BookController.book_get_all_borrowed)

//Fill in Book Information By sending ISBN to googleapis route (returns specif information for a book given only its ISBN)
router.get('/new/autofill',authM, BookController.book_add_new_post_autofill)


module.exports = router