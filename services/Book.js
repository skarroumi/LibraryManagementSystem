const Book = require('../models/Book')
const fetch = require('node-fetch')


//All Books Function
function allBooks(cb){
    try{
        Book.findAll().then(books => {
            cb(null,books)
        }).catch(err=>{cb(err,null)})
    }catch{
        cb(error)
    }
}

//All borrowed books Function
function borrowedBooks(cb){
    try{
        Book.findAll({ where: { BorrowedStatusBo: true }}).then(books => {
            cb(null,books)
        }).catch(err=>{cb(err,null)})
    }catch{
        cb(error)
    }
}

//Add New Book Function
function addBook(bookISBN, bookAuthor, bookCategory, bookTitleBo, bookReleaseDateBo, bookPriceBo, bookCoverBo, bookDesc, pageNumber,cb){
    try{
    Book.create({ISBN: bookISBN, Author: bookAuthor, Category: bookCategory, TitleBo: bookTitleBo, ReleaseDateBo: bookReleaseDateBo, PriceBo: bookPriceBo, CoverBo:bookCoverBo,DescriptionBo:bookDesc, PageCountBo: pageNumber }).then(bookAddRes=>{cb(null, bookAddRes)}).catch(err=>{cb(err,null)})
    }catch(error){
        cb(error)
    }
}

//One Book Information Function
function uniqueBookInfo(isbn, cb){
    try{
        Book.findOne({ where: { ISBN: isbn }}).then(book => {
            cb(null,book)
        }).catch(err=>{cb(err,null)})
    }catch{
        cb(error)
    }
}

//delete book Function
function deleteBook(bookISBN, cb){
    try{
    Book.findOne({ where: { ISBN: bookISBN }}).then(book => {
        book.destroy()
        cb(null,true)
    }).catch(err=>{cb(err,null)})
    }catch(error){
    cb(error)
}
}

//Retrieve book information by giving the ISBN of it as a parameter to an external Web service (googleapis)
function getBookInfo(isbnC,cb){
    
    fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbnC}`, {method: 'GET'})
  .then(response => {
      return response.json()
    })
  .then(result => {
      let concernedValues = {
      bookTitle : result.items[0].volumeInfo.title,
      authorName : result.items[0].volumeInfo.authors[0],
      releaseDate : result.items[0].volumeInfo.publishedDate,
      bookDescription : result.items[0].volumeInfo.description,
      bookCover : result.items[0].volumeInfo.imageLinks.smallThumbnail,
      bookPage : result.items[0].volumeInfo.pageCount
      }
    
    cb(null,concernedValues)})
  .catch(error => cb(error,null));
 
}

//----------------------------------------------UPDATES--------------------------------------------->
//update book Author
function updateBookAuthor(bookISBN, idAuthor, cb){
    try {
    Book.update(
        { Author:  idAuthor },
        { where: { ISBN: bookISBN }}
    ).then(res=>{cb(null, res)}).catch(err=>{cb(err,null)}) 
}catch(error){
    cb(error)
}
}

//update book Category
function updateBookCategory(bookISBN, idCategory, cb){
    try {
    Book.update(
        { Category:  idCategory },
        { where: { ISBN: bookISBN}}
    ).then(res=>{cb(null, res)}).catch(err=>{cb(err,null)})
}catch(error){
    cb(error)
} 
}

//update book Title
function updateBookTitle(bookISBN, bookTitle, cb){
    try {
    Book.update(
        { TitleBo:  bookTitle},
        { where: { ISBN: bookISBN }}
    ).then(res=>{cb(null, res)}).catch(err=>{cb(err,null)}) 
}catch(error){
    cb(error)
} 
}

//update book release date
function updateBookReleaseDate(bookISBN, releaseDate, cb){
    try {
    Book.update(
        { ReleaseDateBo:  releaseDate},
        { where: { ISBN: bookISBN }}
    ).then(res=>{cb(null, res)}).catch(err=>{cb(err,null)}) 
}catch(error){
    cb(error)
} 
}

//update book price
function updateBookPrice(bookISBN, priceB, cb){
    try {
    Book.update(
        { PriceBo:  priceB},
        { where: { ISBN: bookISBN }}
    ).then(res=>{cb(null, res)}).catch(err=>{cb(err,null)})
}catch(error){
    cb(error)
}  
}

//update book cover
function updateBookCover(bookISBN, newCover, cb){

        try {
    Book.update(
        { CoverBo:  newCover},
        { where: { ISBN: bookISBN }}
    ).then(res=>{cb(null, res)}).catch(err=>{cb(err,null)})
}catch(error){
    cb(error)
}      
}

//update book cover
function updateBookBorrowStatus(bookISBN, newStatus, cb){
    try {
    Book.update(
        { BorrowedStatusBo:  newStatus},
        { where: { ISBN: bookISBN }}
    ).then(res=>{cb(null, res)}).catch(err=>{cb(err,null)})
}catch(error){
    cb(error)
}  
}

//update book description
function updateBookDescription(bookISBN, newDesc, cb){
    try {
    Book.update(
        { DescriptionBo:  newDesc},
        { where: { ISBN: bookISBN }}
    ).then(res=>{cb(null, res)}).catch(err=>{cb(err,null)})
}catch(error){
    cb(error)
}  
}

//update book page count
function updateBookPageCount(bookISBN, newPage, cb){
    try {
    Book.update(
        { DescriptionBo:  newDesc},
        { where: { ISBN: bookISBN }}
    ).then(res=>{cb(null, res)}).catch(err=>{cb(err,null)})
}catch(error){
    cb(error)
}  
}


module.exports = {
    addBook, deleteBook,   updateBookAuthor, updateBookCategory, updateBookTitle, updateBookReleaseDate, updateBookPrice, updateBookCover, borrowedBooks, updateBookBorrowStatus,getBookInfo, allBooks, uniqueBookInfo, updateBookDescription, updateBookPageCount
} 