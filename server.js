if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}
const axios = require('axios')
const passport = require('passport')
const fetch = require('node-fetch')
const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const flash = require('connect-flash')
const session = require('express-session')

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false}))
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts) 
app.use(express.static('public'))

const {addBook, deleteBook, borrowedBooks, updateBookBorrowStatus, getBookInfo} = require('./services/Book')
const {borrowBook, returnBook, unavailabilityRequest} = require('./services/SpecialRequest')

const PORT = process.env.PORT || 8080;
app.listen(PORT, console.log(`Server started on port ${PORT}`))

require('./config/passport')(passport)
//DB Connection
require('./config/sequelizeModule')

//Express session
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  }))
  app.use(passport.initialize());
  app.use(passport.session());
  //connect flash
  app.use(flash())

  //global vars
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg')
    res.locals.error_msg = req.flash('error_msg')
    res.locals.error = req.flash('error')
    next()
})


//--------------------------------TEST SERVICES-----------------------------------------------------------
app.post('/test',(req,res,next)=>{
    addBook('11322111', '1', '1', 'testname', '2010', '23.10',null,10 ,(error,response)=>{if(error){return res.send(error)} res.send(response)})
})

app.post('/delete',(req,res,next)=>{
    deleteBook('11322111',(error,response)=>{if(error){return res.send(error)} res.send(response)})
})

app.post('/update',(req,res,next)=>{
    updateBookCopiesNumber('1111111111',1500, (error,response)=>{if(error){return res.send(error)} res.send(response)})
})

app.post('/borrowed',(req,res,next)=>{
    borrowedBooks((error,response)=>{if(error){return res.send(error)} res.send(response)})
})

app.post('/register',(req,res,next)=>{
    studentRegister('12345', 'soufianeka', 'graduate', 'ska@gmail.com', (error,response)=>{if(error){return res.send(error)} res.send(response)})
})

app.post('/bor',(req,res,next)=>{
    unavailabilityRequest('72609', 'please i would like to get this book for purpose X and stuff', (error,response)=>{if(error){return res.send(error)} res.send(response)})
})




app.get('/apitest',(req,res,next)=>{
    const isbnC = req.param('isbnC');
    //console.log(isbnC)
    getBookInfo(isbnC,(error,result)=>{if (error) {return res.send();} res.send(result)})
})
//--------------------------------TEST SERVICES-----------------------------------------------------------









const indexRouter = require('./routes/index')
app.use('/', indexRouter)
const bookRouter = require('./routes/books')
app.use('/books', bookRouter)
const requestRouter = require('./routes/requests')
app.use('/requests', requestRouter)
const userRouter = require('./routes/users')
const { studentRegister } = require('./services/User')
app.use('/users', userRouter)


