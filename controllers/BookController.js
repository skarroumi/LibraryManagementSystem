const BookService = require('../services/Book')


//All Books 
book_get_all = (req, res) => {
    BookService.allBooks((error,bookList)=>{if(error){return res.status(400).json({ status: 400, message: error})} res.status(200).json({ status: 200, message: bookList})})
   
}

//All borrowed Books  
book_get_all_borrowed = (req, res) => {
    BookService.borrowedBooks((error,borrowedList)=>{if(error){return res.status(400).json({ status: 400, message: error})} res.status(200).json({ status: 200, message: borrowedList})})
}

//Add New book 
book_add_new_post = (req, res) => {
    //get post body content to submit to the addBook function in the BookService
    isbnR = req.body.isbn
    bookAuthR = req.body.author
    bookCatR = req.body.category
    bookTitleR = req.body.title
    bookrelasedR = req.body.releaseDate
    bookPrice = req.body.price
    bookCover = req.body.cover
    bookDescription = req.body.description
    bookPageCount = req.body.pageCount
    //send data to the Book service to add the book
    BookService.addBook(isbnR, bookAuthR, bookCatR, bookTitleR, bookrelasedR, bookPrice, bookCover, bookDescription, bookPageCount, (error,bookInserted)=>{if(error){return res.status(400).json({ status: 400, message: error})} res.status(200).json({ status: 200, message: bookInserted})})
}

//One Book Information
book_get_one = (req,res)=>{
    const bookId = req.query.isbn
    BookService.uniqueBookInfo(bookId, (error,bookInfo)=>{if(error){return res.status(400).json({ status: 400, message: error})} res.status(200).json({ status: 200, message: bookInfo})})
   
}

//delete book 
book_delete_one = (req,res)=>{
    const bookId = req.body.isbn;
    BookService.deleteBook(bookId, (error,deleteTrue)=>{if(error){return res.status(400).json({ status: 400, message: error})} res.status(200).json({ status: 200, message: returnedData})})
}

//Fill in Book Information By sending ISBN to googleapis
book_add_new_post_autofill = (req,res)=>{
    const bookId = req.query.isbn
    BookService.getBookInfo(bookId, (error,returnedData)=>{if(error){return res.status(400).json({ status: 400, message: error})} res.status(200).json({ status: 200, message: returnedData})})
}

//update book information 
book_update_one = (req,res)=>{
    const bookId = req.body.isbn
    const bookAuth = req.body.author
    const bookCat = req.body.category
    const bookTit = req.body.title
    const bookReleaseD = req.body.releaseDate
    const priceBo = req.body.price
    const coverB = req.body.cover
    const descrB = req.body.description
    const pageC = req.body.pageCount
    const statusB = req.body.statusBorrowed

    if (bookAuth){
        BookService.updateBookAuthor(bookId, bookAuth, (error,response)=>{if(error){return res.status(400).json({ status: 400, message: error})} res.status(200).json({ status: 200, message: "true"})})
    }
    if (bookCat){
        BookService.updateBookCategory(bookId, bookCat, (error,response)=>{if(error){return res.status(400).json({ status: 400, message: error})} res.status(200).json({ status: 200, message: "true"})})
    }
    if (bookTit){
        BookService.updateBookTitle(bookId, bookTit, (error,response)=>{if(error){return res.status(400).json({ status: 400, message: error})} res.status(200).json({ status: 200, message: "true"})})
    }
    if (bookReleaseD){
        BookService.updateBookReleaseDate(bookId, bookReleaseD, (error,response)=>{if(error){return res.status(400).json({ status: 400, message: error})} res.status(200).json({ status: 200, message: "true"})})
    }
    if (priceBo){
        BookService.updateBookPrice(bookId, priceBo, (error,response)=>{if(error){return res.status(400).json({ status: 400, message: error})} res.status(200).json({ status: 200, message: "true"})})
    }
    if (coverB){
        BookService.updateBookCover(bookId, coverB, (error,response)=>{if(error){return res.status(400).json({ status: 400, message: error})} res.status(200).json({ status: 200, message: "true"})})
    }
    if (descrB){
        BookService.updateBookDescription(bookId, descrB, (error,response)=>{if(error){return res.status(400).json({ status: 400, message: error})} res.status(200).json({ status: 200, message: "true"})})
    }
    if (pageC){
        BookService.updateBookPageCount(bookId, pageC, (error,response)=>{if(error){return res.status(400).json({ status: 400, message: error})} res.status(200).json({ status: 200, message: "true"})})
    }
    if (statusB){
        BookService.updateBookBorrowStatus(bookId, statusB, (error,response)=>{if(error){return res.status(400).json({ status: 400, message: error})} res.status(200).json({ status: 200, message: "true"})})
    }

}

book_search = (req,res)=>{
    const {isbn, title, category, author} = req.query
    BookService.bookSearch(isbn, title, category,author, (error,bookSearchRes)=>{if(error){return res.status(200).json({ status: 200, message: error})} res.status(200).json({ status: 200, message: bookSearchRes})})
}


module.exports = {
    book_get_all,book_get_all_borrowed, book_add_new_post, book_get_one, book_delete_one, book_update_one, book_add_new_post_autofill, book_search
}