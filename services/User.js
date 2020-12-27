const Student = require('../models/Student')
const Manager = require('../models/Manager')
const passport = require('passport')
const bcrypt = require('bcryptjs')

//student register function
function studentRegister(id, name, division, email, password, cb){
    try {
    Student.create({IDStudent: id, NameSt: name, DivisionSt: division, EmailSt: email, PasswordSt: password }).then(res=>{cb(null, res)}).catch(err=>{cb(err,null)})
    }catch(error){
    cb(error)
}
}


//student login
function studentLogin(email, password, cb){
    try{
        Student.findOne({ where: { EmailSt: email }})
        .then(student => {
            if(student){
            bcrypt.compare(password, student.PasswordSt, (err, isMatch) => {
                if (err) throw err
                if (isMatch){  
                    cb(null,student)
                } else {
                    cb(null, false)
                }
            })
        } else {
            cb(null, false)
        }
        }).catch(err=>{cb(err,null)})
    }catch{
        cb(error)
    }
}


//manager login
function managerLogin(username, password, cb){
    try{
        Manager.findOne({ where: { UsernameMa: username }})
        .then(manager => {
            if(manager){
            bcrypt.compare(password, manager.PasswordMa, (err, isMatch) => {
                if (err) throw err
                if (isMatch){  
                    cb(null,manager)
                } else {
                    cb(null, false)
                }
            })
        } else {
            cb(null, false)
        }
        }).catch(err=>{cb(err,null)})
    }catch{
        cb(error)
    }
}

//prohibit or authorize student to borrow books
function changeAccess(studentId, valueToSet, cb){
    
    try {
    if (Student.update(
        { AccessStatusSt:  valueToSet},
        { where: { IDStudent: studentId }}).catch(err=>{cb(err,null)})){
            cb(null, true)
        }
        
}catch{
    cb(error)
}
}

module.exports = {
    studentRegister, studentLogin, changeAccess, managerLogin
}