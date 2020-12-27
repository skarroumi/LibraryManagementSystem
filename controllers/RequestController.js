const RequestService = require('../services/SpecialRequest')


//borrow book
borrowRequest = (req, res) => {
    studentId = req.param('studentId')
    bookId = req.param('isbn')
    RequestService.borrowBook(studentId, bookId,(error,response)=>{if(error){return res.send(error)} res.send(response)})
}

//return book 
returnRequest = (req, res) => {
    stdID = req.param('stid')
    bkID = req.param('bkid')
    RequestService.returnBook(stdID, bkID,(error,response)=>{if(error){return res.send(error)} res.send(response)})
}

//create unavailability request (special request)
unavailabilityRequest = (req, res) => {
    idSt = req.param('idstudent')
    desc = req.param('description')
    RequestService.unavailabilityRequest(idSt, desc, (error,response)=>{if(error){return res.send(error)} res.send(response)})
}


module.exports = {
    borrowRequest, returnRequest, unavailabilityRequest
}