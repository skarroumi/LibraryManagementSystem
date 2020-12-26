const Book = require('../models/Book')
const Student = require('../models/Student')
const StudentRequestBook = require('../models/StudentRequestBook')
const {updateBookBorrowStatus} = require('./Book')


//create borrow request (only student not prohibited by the managers(have AccessStatusSt = true) can submit a request to borrow a book)
function borrowBook(studentId, bookId, cb){
    let reqId = 1
    try{
        (Student.findOne({ where: { IDStudent: studentId, AccessStatusSt: true }}) && Book.findOne({ where: { ISBN: bookId, BorrowedStatusBo: false }})).then(student => {
                StudentRequestBook.create({ ISBN: bookId, IDStudent: studentId, IDRequest: reqId})
                updateBookBorrowStatus(bookId, true, () => {

                })
        }).catch(err=>{cb(err,null)})
    }catch{
        cb(error)
    }
}


//retrun request will flag the book as not borrowed and delete it from the StudentRequestBook association
function returnBook(studentId, bookId, cb){
    let borReqCode = 1
    try{
        StudentRequestBook.findOne({ where: {IDStudent: studentId, ISBN: bookId, IDRequest: borReqCode}}).then(returnReq => {
                updateBookBorrowStatus(bookId, false, () => {
                })
                returnReq.destroy()  
        }).catch(err=>{cb(err,null)})
    }catch{
        cb(error)
    }
}


//create unavailability Request: doesn't require the ISBN of the book, because student will have to write the name of the book in the description
function unavailabilityRequest(studentId, desc, cb){
    let unavReqCode = 3
    if (Student.findOne({ where: { IDStudent: studentId, AccessStatusSt: true } })){
        try{
            StudentRequestBook.create({IDStudent: studentId, IDRequest: unavReqCode, DescRequest: desc}).catch(err=>{cb(err,null)})
        }catch{
            cb(error)
        }
    }
}


module.exports = {
    borrowBook, returnBook, unavailabilityRequest
}