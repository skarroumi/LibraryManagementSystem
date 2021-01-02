const Models = require('../models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const UserService = require('../services/User')
const Joi = require('@hapi/joi')


//Register Validation
const studentModelRegistration = Joi.object({
    id: Joi.string().min(5).max(5).required(),
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    division: Joi.string().required(),
    password: Joi.string().required(),
    password2: Joi.string().valid(Joi.ref('password')).required()
})

//Student Login validation
const studentModelLogin = Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
})

//Manager Login validation
const managerModelLogin = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
})

//student register 
studentRegisterPost = (req, res) => {
const {id, name, email, division, password, password2} = req.body

    //Validate the data
    const {error} = studentModelRegistration.validate(req.body)
    if(error) return res.status(400).send(error.details[0].message)

    //Register user using the register function in the User Service
    UserService.studentRegister(id, name, division, email, password,  (error,createdStudent)=>{if(error){return res.send(error)} res.send(createdStudent)})        
            
}

//student login
studentLoginPost = (req, res) => {
    const {email, password} = req.body

    //Validate the data
    const {error} = studentModelLogin.validate(req.body)
    if(error) return res.status(400).send(error.details[0].message)

        //Login student with the UserService specific function
        UserService.studentLogin(email, password, (error,loggedInStudent)=>{
            if(error){
                return res.status(400).send(error)
            } 
            //create and assign a token
            const token = jwt.sign({ _email: loggedInStudent.EmailSt }, "fsdhfisudhfisufsdjfbssfefe3243rwer")
            res.header('auth-token', token).send(token)
            })  
    
}

//manager login
managerLoginPost = (req, res) => {
    const {username, password} = req.body

    //Validate the data
    const {error} = managerModelLogin.validate(req.body) 
    if(error) return res.status(400).send(error.details[0].message)

    //Do loginn in the userService
    UserService.managerLogin(username, password, (error,loggedInManager)=>{
        if(error){
            return res.status(400).send(error)
        } 
        //create and assign a token
        const token = jwt.sign({ _username: loggedInManager.username }, "fsdhfisudhfisufsdjfbssfefe3243rwer")
        res.header('mauth-token', token).send(token)
        })  
 
    
}

//prohibit or authorize a student to borrow books
managerChangeAcess = (req, res) => {
    studentId = req.body.studentid
    newAccessValue = req.body.accessvalue
    UserService.changeAccess(studentId, newAccessValue, (error, accessResult) =>{if(error){ return res.send(error)} res.send(accessResult)})
}


module.exports = {
    studentLoginPost, studentRegisterPost, managerLoginPost, managerChangeAcess
}