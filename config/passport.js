
const localStrategy = require('passport-local').Strategy
const bcrypt = require('bcryptjs')


module.exports = function(passport){
    passport.use(
        new localStrategy({ usernameField: 'email' }, (email, password, done) => {
            const Student = require('../models/Student')
            const Book = require('../models/Book')
            Student.findOne({ where: { EmailSt: email } }).then(student => {
                if (!student){
                    return done(null, false, { message: 'That email is not registered'}) 
            }  
            bcrypt.compare(password, student.PasswordSt, (err, isMatch) => {
                if(err) throw err;
                if (isMatch){
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
        console.log(student.IDStudent)
        done(null, student.IDStudent);
      });
      
      passport.deserializeUser((IDStudent, done) => {
        const Student = require('../models/entities/Student')
        Student.findByPk(IDStudent).then(student => {
            done(null, student)
        })  
        });
      
}