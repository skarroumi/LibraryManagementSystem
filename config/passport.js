const localStrategy = require('passport-local').Strategy
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

module.exports = function(passport){
    passport.use(
        new localStrategy({ usernameField: 'email' }, (email, password, done) => {
            const Student = require('../models/Student')
            Student.findOne({ where: { EmailSt: email } }).then(student => {
                if (!student){
                    return done(null, false, { message: 'That email is not registered'}) 
            }  
            bcrypt.compare(password, student.PasswordSt, (err, isMatch) => {
                if(err) throw err;
                if (isMatch){
                    const token = jwt.sign({
                        email: student.EmailSt,
                        userId: student.IDStudent
                    }, "secret", {
                        expiresIn: "1h"
                    })
                    console.log(token)
                    return done(null, student);

                    
                }
                else {
                    return done(null, false, {message: 'Password incorrect'})
                }
            })
            })
        })
    )


    passport.serializeUser((student, done) => {
        done(null, student.IDStudent);
      });
      
      passport.deserializeUser((IDStudent, done) => {
        const Student = require('../models/Student')
        Student.findByPk(IDStudent).then(student => {
            done(null, student)
        })  
        });
      
}