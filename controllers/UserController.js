const Student = require('../models/Student')
const passport = require('passport')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const UserService = require('../services/User')


//student register 
studentRegisterPost = (req, res) => {
    const {id, name, email, division,accessStaus, password, password2} = req.body
    let errors = []
    
        //check required fields
    if(!id || !name || !email || !division || !password || !password2) {
        errors.push({ msg: 'Please fill in all fields'})
    }
    
        //check passwords match
    if (password !== password2){
        errors.push({msg: 'Passwords do not match'})
    }
        //check password length
    if(password.length < 6){
        errors.push({msg: 'Password should be at least 6 characters'})
    }
    if(errors.length > 0){
        res.render('studentregister', {
            errors, 
            id,
            name, 
            email, 
            division, 
            password, 
            password2
        })
    } else {
            Student.findOne({ where: { IDStudent: 'id' } }).then(student => {
                if (student){
                    errors.push({ msg: 'Student already registered'})
                    res.render('studentregister', {
                        errors, 
                        id,
                        name,
                        division, 
                        email, 
                        password, 
                        password2
                    })
            }  else {
                //create student buffer object with plain text passwotf
                 const newStudent = new Student({ IDStudent: id, NameSt:name, EmailSt:email, DivisionSt:division,  PasswordSt: password})
    
                 bcrypt.genSalt(10, (err, salt) => 
                bcrypt.hash(newStudent.PasswordSt, salt, (err, hash) => {
                if(err) throw err;
                newStudent.PasswordSt = hash

                //Register user using the register function in the User Service
                UserService.studentRegister(newStudent.IDStudent, newStudent.NameSt, newStudent.DivisionSt, newStudent.EmailSt, newStudent.PasswordSt,  (error,response)=>{if(error){return res.send(error)} res.send(response)})
                
                //req.flash('success_msg', 'Registration successful')
                //res.redirect('login')
                }))
                
            }
            
            })
              
    }
}

//student login
studentLoginPost = (req, res, next) => {
    useremail = req.body.email
    userpassword = req.body.password
    UserService.studentLogin(useremail, userpassword, (error,response)=>{if(error){return res.send(error)} res.send(response)})
}

//manager login
managerLoginPost = (req, res, next) => {
    username = req.body.username
    userpassword = req.body.password
    UserService.managerLogin(username, userpassword, (error,response)=>{if(error){return res.send(error)} res.send(response)})
}

//prohibit or authorize a student to borrow books
managerChangeAcess = (req, res) => {
    studentId = req.param('studentid')
    newAccessValue = req.param('accessvalue')
    UserService.changeAccess(studentId, newAccessValue, (error, response) =>{if(error){ return res.send(error)} res.send(response)})
}


module.exports = {
    studentLoginPost, studentRegisterPost, managerLoginPost, managerChangeAcess
}