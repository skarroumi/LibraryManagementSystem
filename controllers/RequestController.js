const RequestService = require('../services/SpecialRequest')


//borrow book
borrowRequest = (req, res) => {
    studentId = req.body.studentId
    bookId = req.body.isbn
    RequestService.borrowBook(studentId, bookId,(error,response)=>{if(error){return res.send(error)} res.send(response)})
}

//return book 
returnRequest = (req, res) => {
    stdID = req.body.studentId
    bkID = req.body.isbn
    RequestService.returnBook(stdID, bkID,(error,response)=>{if(error){return res.send(error)} res.send(response)})
}

//create unavailability request (special request)
unavailabilityRequest = (req, res) => {
    idSt = req.body.idstudent
    desc = req.body.description
    RequestService.unavailabilityRequest(idSt, desc, (error,response)=>{if(error){return res.send(error)} res.send(response)})
}

waitListHandling = (req, res) => {
    idSt = req.body.idstudent
    idList = req.body.idlist
    RequestService.waitListHandling(idSt, idList, (error,response)=>{if(error){return res.send(error)} res.send(response)})
}

showSpecial = (req, res) => {
    RequestService.showSpecialRequest((error,response)=>{if(error){return res.send(error)} res.send(response)})
}


module.exports = {
    borrowRequest, returnRequest, unavailabilityRequest, waitListHandling, showSpecial,
}