const {updateBookBorrowStatus} = require('./Book')
const Models = require('../models')


//borrow book function
function borrowBook(studentId, bookId, cb){
    let reqType = 'Borrow'
    try{
        Models.Student.findOne({ where: { IDStudent: studentId, AccessStatusSt: true }}) && Models.Book.findOne({ where: { ISBN: bookId, BorrowedStatusBo: false }}).then(borrowAuth => {
            if(borrowAuth){
                Models.Request.findAndCountAll({ where: { IDStudent: studentId, TypeRe: reqType }}).then(reqNumber => {
                    if(reqNumber.count < 2){
                        updateBookBorrowStatus(bookId, true, () => {
                        })
                        Models.Request.create({ ISBN: bookId, IDStudent: studentId, TypeRe: reqType}).then(studentRequest => {
                            cb(null,studentRequest)
                        }).catch(err=>{cb(err,null)})
                    } else {
                        cb(null, false)
                    }
                })
            
        }
        })
        }    
    catch{
        cb(error)
    }
}

//return book function
function returnBook(studentId, bookId, cb){
    let reqType = 'Borrow'
    
    try{
        Models.Request.findOne({ where: { IDStudent: studentId, ISBN: bookId, TypeRe: reqType }}).then(returnAllowed => {
            if(returnAllowed){
                updateBookBorrowStatus(bookId, false, () => {
                })
                Models.Request.destroy({
                    where: {
                        IDStudent: studentId, ISBN: bookId, TypeRe: reqType
                    }
                })
                cb(null, true)
            }
        })
        
}catch(error){
    cb(error)
}
    
}

//create unavailability request (special request) Function
function unavailabilityRequest(studentId, desc, cb){
    let unavReqType = 'Unavailability'
    if (Models.Student.findOne({ where: { IDStudent: studentId, AccessStatusSt: true } })){
        try{
            Models.Request.create({IDStudent: studentId, TypeRe: unavReqType, DescriptionRe: desc }).then(specialReq => {
                cb(null,specialReq)
            }).catch(err=>{cb(err,null)})
        }catch{
            cb(error)
        }
    }
}

function showSpecialRequest(cb){
        try{
            Models.Request.findAll({ where: { TypeRe: 'Unavailability' }}).then(ReqList => {
                cb(null,ReqList)
            }).catch(err=>{cb(err,null)})

        }catch{
            cb(error)
        }

}

function waitListHandling(studentId, booklist, cb){
    try {
        Models.WaitList.findOne( { where: {ISBN: booklist} }).then(list => {
            if(list){
                if (Models.Student.update(
                    { IDWaitList:  list.IDWaitList},
                    { where: { IDStudent: studentId }}).catch(err=>{cb(err,null)})) {
                        cb(null, list)
                    }
            }
        })
    } catch {
        cb(error)
    }


}


module.exports = {
    borrowBook, returnBook, unavailabilityRequest, waitListHandling, showSpecialRequest
}