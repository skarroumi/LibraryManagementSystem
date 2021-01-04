const Models = require('../models')
const fetch = require('node-fetch')


//All Books Function 
function allBooks(cb){
    try{
        Models.Book.findAll().then(books => {
            cb(null,books)
        })
    }catch{
        cb(error)
    }
}

//Book Search  
function bookSearch(isbn, title, category,author, cb){
    if (isbn){
        Models.Book.findAll({ where: { ISBN: isbn}}).then(bookSearchResult => {
                cb(null, bookSearchResult)
        })
    }
    else if(title){
        Models.Book.findAll({ where: { TitleBo: title}}).then(bookSearchResult => {
                cb(null, bookSearchResult)
        })
    }
    else if (category){
         Models.Book.findAll({
            include: [{
              model: Models.Category,
              where: {NameCa: category}
             }]
          }).then(bookSearchResult => {
            cb(null, bookSearchResult)
          });
    }
    else if (author){
        Models.Book.findAll({
           include: [{
             model: Models.Author,
             where: {NameAu: author}
            }]
         }).then(bookSearchResultAU => {
           cb(null, bookSearchResultAU)
         });
   } else {
       cb(null, false)
   }
}

//All borrowed books Function
function borrowedBooks(cb){
    try{
        Models.Book.findAll({ where: { BorrowedStatusBo: true }}).then(books => {
            cb(null,books)
        })
    }catch{
        cb(error)
    }
}

//One Book Information Function 
function uniqueBookInfo(isbn, cb){
    try{
        Models.Book.findOne({ where: { ISBN: isbn }}).then(book => {
            cb(null,book)
        }).catch(err=>{cb(err,null)})
    }catch{
        cb(error)
    }
}

//Add New Book Function
function addBook(bookISBN, bookAuthor, bookCategory, bookTitleBo, bookReleaseDateBo, bookPriceBo, bookCoverBo, bookDesc, pageNumber,cb){
    try{
        Models.Book.create({ISBN: bookISBN, IDAuthor: bookAuthor, IDCategory: bookCategory, TitleBo: bookTitleBo, ReleaseDateBo: bookReleaseDateBo, PriceBo: bookPriceBo, CoverBo:bookCoverBo,DescriptionBo:bookDesc, PageCountBo: pageNumber }).then(bookAddRes=>{cb(null, bookAddRes)}).catch(err=>{cb(err,null)})
    }catch(error){
        cb(error)
    }
}

//delete book Function  
function deleteBook(bookISBN, cb){
    try{
        Models.Book.findOne({ where: { ISBN: bookISBN }}).then(book => {
        book.destroy()
        cb(null,true)
    }).catch(err=>{cb(err,null)})
    }catch(error){
    cb(error)
}
}



//----------------------------------------------UPDATES--------------------------------------------->
//update book Author
function updateBookAuthor(bookISBN, idAuthor, cb){
    try {
        Models.Book.update(
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
        Models.Book.update(
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
        Models.Book.update(
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
        Models.Book.update(
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
        Models.Book.update({ PriceBo:  priceB},
        { where: { ISBN: bookISBN }}
    ).then(res=>{cb(null, res)}).catch(err=>{cb(err,null)})
}catch(error){
    cb(error)
}  
}

//update book cover
function updateBookCover(bookISBN, newCover, cb){

        try {
            Models.Book.update(
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
        Models.Book.update(
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
        Models.Book.update(
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
        Models.Book.update(
        { PageCountBo:  newPage},
        { where: { ISBN: bookISBN }}
    ).then(res=>{cb(null, res)}).catch(err=>{cb(err,null)})
}catch(error){
    cb(error)
}  
}


module.exports = {
    addBook, deleteBook,   updateBookAuthor, updateBookCategory, updateBookTitle, updateBookReleaseDate, updateBookPrice, updateBookCover, borrowedBooks, updateBookBorrowStatus,getBookInfo, allBooks, uniqueBookInfo, updateBookDescription, updateBookPageCount, bookSearch
} 