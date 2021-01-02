const Models = require('../models')
const bcrypt = require('bcryptjs')


//create new student
function studentRegister(id, name, division, email, password, cb){
    try {
        Models.Student.findOne({ where: { IDStudent: id } }).then(student => {
            if (student){
                cb(null, false)
        }  else {
            //create student object with hashed password
            var passEd = password
            bcrypt.genSalt(10, (err, salt) => 
            bcrypt.hash(passEd, salt, (err, hash) => {
            if(err) throw err;
            passEd = hash

            //Register user 
            Models.Student.create({IDStudent: id, NameSt: name, DivisionSt: division, EmailSt: email, PasswordSt: password }).then(res=>{cb(null, res)}).catch(err=>{cb(err,null)})
            }))      
        } 
        })
    }catch(error){
    cb(error)
}
}

//authenticate student
function studentLogin(email, password, cb){
    try{
        Models.Student.findOne({ where: { EmailSt: email }})
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

//authenticate manager
function managerLogin(username, password, cb){
    try{
        Models.Manager.findOne({ where: { UsernameMa: username }})
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
    if (Models.Student.update(
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