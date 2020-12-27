const BookService = require('../services/Book')


//All Books 
book_get_all = (req, res) => {
    BookService.allBooks((error,response)=>{if(error){return res.send(error)} res.send(response)})
}

//All borrowed Books  
book_get_all_borrowed = (req, res) => {
    BookService.borrowedBooks((error,response)=>{if(error){return res.send(error)} res.send(response)})
}

//Add New book 
book_add_new_post = (req, res) => {
    isbnR = req.param('isbn')
    bookAuthR = req.param('author')
    bookCatR = req.param('category')
    bookTitleR = req.param('title')
    bookrelasedR = req.param('releaseDate')
    bookPrice = req.param('price')
    bookCover = req.param('cover')
    bookDescription = req.param('description')
    bookPageCount = req.param('pageCount')
    BookService.addBook(isbnR, bookAuthR, bookCatR, bookTitleR, bookrelasedR, bookPrice, bookCover, bookDescription, bookPageCount, (error,response)=>{if(error){return res.send(error)} res.send(response)})
}

//One Book Information
book_get_one = (req,res)=>{
    const bookId = req.param('isbn');
    BookService.uniqueBookInfo(bookId, (error,response)=>{if(error){return res.send(error)} res.send(response)})
}

//delete book 
book_delete_one = (req,res)=>{
    const bookId = req.param('isbn');
    BookService.deleteBook(bookId, (error,response)=>{if(error){return res.send(error)} res.send(response)})
}

//Fill in Book Information By sending ISBN to googleapis
book_add_new_post_autofill = (req,res,next)=>{
    const bookId = req.param('isbn');
    BookService.getBookInfo(bookId, (error,response)=>{if(error){return res.send(error)} res.send(response)})
}

//update book information 
book_update_one = (req,res,next)=>{
    const bookId = req.param('id');
    const bookAuth = req.param('author')
    const bookCat = req.param('category')
    const bookTit = req.param('title')
    const bookReleaseD = req.param('releaseDate')
    const priceBo = req.param('price')
    const coverB = req.param('cover')
    const descrB = req.param('description')
    const pageC = req.param('pageCount')
    const statusB = req.param('statusBorrowed')

    if (bookAuth){
        BookService.updateBookAuthor(bookId, bookAuth, (error,response)=>{if(error){return res.send(error)} res.send(response)})
    }
    if (bookCat){
        BookService.updateBookCategory(bookId, bookCat, (error,response)=>{if(error){return res.send(error)} res.send(response)})
    }
    if (bookTit){
        BookService.updateBookTitle(bookId, bookTit, (error,response)=>{if(error){return res.send(error)} res.send(response)})
    }
    if (bookReleaseD){
        BookService.updateBookReleaseDate(bookId, bookReleaseD, (error,response)=>{if(error){return res.send(error)} res.send(response)})
    }
    if (priceBo){
        BookService.updateBookPrice(bookId, priceBo, (error,response)=>{if(error){return res.send(error)} res.send(response)})
    }
    if (coverB){
        BookService.updateBookCover(bookId, coverB, (error,response)=>{if(error){return res.send(error)} res.send(response)})
    }
    if (descrB){
        BookService.updateBookDescription(bookId, descrB, (error,response)=>{if(error){return res.send(error)} res.send(response)})
    }
    if (pageC){
        BookService.updateBookPageCount(bookId, pageC, (error,response)=>{if(error){return res.send(error)} res.send(response)})
    }
    if (statusB){
        BookService.updateBookBorrowStatus(bookId, statusB, (error,response)=>{if(error){return res.send(error)} res.send(response)})
    }

}


module.exports = {
    book_get_all,book_get_all_borrowed, book_add_new_post, book_get_one, book_delete_one, book_update_one, book_add_new_post_autofill
}