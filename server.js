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

app.listen(process.env.PORT || 8080)


//Connection to the Database

const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true
})
const database = mongoose.connection
database.on('error', error => console.error(error))
database.once('open', () => console.log('Connected'))



const indexRouter = require('./controllers/index')
app.use('/', indexRouter)