if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}
const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts) 
app.use(express.static('public'))

const PORT = process.env.PORT || 8080;
app.listen(PORT, console.log(`Server started on port ${PORT}`))

//DB Connection
require('./config/sequelizeModule')

const indexRouter = require('./routes/index')
app.use('/', indexRouter)
const bookRouter = require('./routes/books')
app.use('/books', bookRouter)
const requestRouter = require('./routes/requests')
app.use('/requests', requestRouter)
const userRouter = require('./routes/users')
app.use('/users', userRouter)


