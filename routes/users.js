const Student = require('../models/Student')
const { ensureAuthenticated } = require('../config/auth')
const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const passport = require('passport')

//<-----------------------------------------------------Student Routes---------------------------------------------->
//login page - GET
router.get('/student/login', (req, res) => 
res.render('studentlogin')
)

//login page - POST
router.post('/student/login', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/users/student/dashboard', 
        failureRedirect: '/users/student/login',
        failureFlash: true
    }) (req, res, next)
})

//register page - GET
router.get('/student/register', (req, res) => 
res.render('studentregister')
)

//register page - POST
router.post('/student/register', (req, res) => {
const {id, name, email, division, password, password2} = req.body
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
             const newStudent = new Student({ IDStudent: id, NameSt:name, EmailSt:email, DivisionSt:division, PasswordSt: password})

             bcrypt.genSalt(10, (err, salt) => 
            bcrypt.hash(newStudent.PasswordSt, salt, (err, hash) => {
            if(err) throw err;
            newStudent.PasswordSt = hash
            console.log(newStudent)
            Student.create({IDStudent: newStudent.IDStudent, NameSt: newStudent.NameSt, DivisionSt: newStudent.DivisionSt, EmailSt:newStudent.EmailSt, PasswordSt: newStudent.PasswordSt})
            req.flash('success_msg', 'Registration successful')
            res.redirect('login')
            }))
            
        }
        
        })
          
}
})

//logout handling 
router.get('/student/logout', (req, res) => {
    req.logout()
    req.flash('success_mgs', 'You logged out')
    res.redirect('/users/student/login')
})

//dashboard - GET
router.get('/student/dashboard', ensureAuthenticated, (req, res) => res.render('studentdashboard', { 
}))



//<------------------------------------------------Manager routes---------------------------------------------------->

//login page - GET
router.get('/manager/login', (req, res) => 
res.render('managerlogin')
)
module.exports = router