const Book = require('../models/Book')
const Student = require('../models/Student')
const StudentRequestBook = require('../models/StudentRequestBook')
const {updateBookBorrowStatus} = require('./Book')


//borrow book function
function borrowBook(studentId, bookId, cb){
    let reqId = 1
    try{
        const borrowAuth = (Student.findOne({ where: { IDStudent: studentId, AccessStatusSt: true }}) && Book.findOne({ where: { ISBN: bookId, BorrowedStatusBo: false }}))
        if (borrowAuth.length == 0){
            cb(null, false)
        } else {
            updateBookBorrowStatus(bookId, true, () => {
            })
            StudentRequestBook.create({ ISBN: bookId, IDStudent: studentId, IDRequest: reqId}).then(studentRequest => {
                cb(null,studentRequest)
            }).catch(err=>{cb(err,null)})
        }
    }catch{
        cb(error)
    }
}

//return book function
function returnBook(studentId, bookId, cb){
    let borReqCode = 1
    if (row = StudentRequestBook.findOne({ where: { IDStudent: studentId, ISBN: bookId, IDRequest: borReqCode }}))
    try{
        updateBookBorrowStatus(bookId, false, () => {
        })
        StudentRequestBook.destroy({
            where: {
                IDStudent: studentId, ISBN: bookId, IDRequest: borReqCode
            }
        })
}catch(error){
    cb(error)
}
    
}

//create unavailability request (special request) Function
//create unavailability Request: doesn't require the ISBN of the book, because student will have to write the name of the book in the description

function unavailabilityRequest(studentId, desc, cb){
    let unavReqCode = 3
    if (Student.findOne({ where: { IDStudent: studentId, AccessStatusSt: true } })){
        try{
            StudentRequestBook.create({IDStudent: studentId, IDRequest: unavReqCode, DescRequest: desc}).then(specialReq => {
                cb(null,specialReq)
            }).catch(err=>{cb(err,null)})
        }catch{
            cb(error)
        }
    }
}


module.exports = {
    borrowBook, returnBook, unavailabilityRequest
}