const Student = require('../models/Student')
const Manager = require('../models/Manager')

//register
function studentRegister(id, name, division, email, password, studentStatus, cb){
    try {
    Student.create({IDStudent: id, NameSt: name, DivisionSt: division, AccessStatusSt: studentStatus, EmailSt: email, PasswordSt: password }).then(res=>{cb(null, res)}).catch(err=>{cb(err,null)})
    }catch(error){
    cb(error)
}
}


//login
function studentLogin(id, password, cd){
    try{
        Student.findOne({ where: { IDStudent: id, PasswordSt: password }}).then(student => {
            cb(null,student)
        }).catch(err=>{cb(err,null)})
    }catch{
        cb(error)
    }
}


//manager login (only a maximum of 5 managers can log in at the same time)
function managerLogin(username, password, cd){
    if ((Manager.findAll({ where: { ConnectionStatusMa: true }})) < 5){   
    try{
        Manager.findOne({ where: { UsernameMa: username, PasswordMa: password }}).then(manager => {
            cb(null,student)
        }).catch(err=>{cb(err,null)})
    }catch{
        cb(error)
    }
}
}


//prohibit or authorize student
function changeAccess(studentId, valueToSet){
    try {
    Models.Student.update(
        { AccessStatusSt:  valueToSet},
        { where: { IDStudent: studentId }}
    ).catch(err=>{cb(err,null)})
}catch{
    cb(error)
}
}

module.exports = {
    studentRegister, studentLogin, changeAccess, managerLogin
}