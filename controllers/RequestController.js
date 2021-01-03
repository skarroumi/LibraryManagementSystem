const RequestService = require('../services/SpecialRequest')


//borrow book
borrowRequest = (req, res) => {
    studentId = req.body.studentId
    bookId = req.body.isbn
    RequestService.borrowBook(studentId, bookId,(error,response)=>{if(error){return res.status(400).json({ status: 400, message: error})} res.status(200).json({ status: 200, message: response})})
}

//return book 
returnRequest = (req, res) => {
    stdID = req.body.studentId
    bkID = req.body.isbn
    RequestService.returnBook(stdID, bkID,(error,response)=>{if(error){return res.status(400).json({ status: 400, message: error})} res.status(200).json({ status: 200, message: "true"})})
}

//create unavailability request (special request)
unavailabilityRequest = (req, res) => {
    idSt = req.body.idstudent
    desc = req.body.description
    RequestService.unavailabilityRequest(idSt, desc, (error,response)=>{if(error){return res.status(400).json({ status: 400, message: error})} res.status(200).json({ status: 200, message: "true"})})
}

waitListHandling = (req, res) => {
    idSt = req.body.idstudent
    list = req.body.booklist
    RequestService.waitListHandling(idSt, list, (error,response)=>{if(error){return res.status(400).json({ status: 400, message: error})} res.status(200).json({ status: 200, message: response})})
}

showSpecial = (req, res) => {
    RequestService.showSpecialRequest((error,response)=>{if(error){return res.status(400).json({ status: 400, message: error})} res.status(200).json({ status: 200, message: response})})
}


module.exports = {
    borrowRequest, returnRequest, unavailabilityRequest, waitListHandling, showSpecial,
}