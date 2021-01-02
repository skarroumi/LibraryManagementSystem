const express = require('express')
const app = express()
const dbConn = require("./models")
const PORT = process.env.PORT || 8080;

app.use(express.json())
const expressLayouts = require('express-ejs-layouts')
app.use(express.urlencoded({ extended: true}))
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts) 
app.use(express.static('public'))

dbConn.sequelize.sync().then(() => {
    app.listen(PORT, console.log(`Server started on port ${PORT}`))
})


const bookRouter = require('./routes/Book')
app.use('/book', bookRouter)

const requestRouter = require('./routes/Request')
app.use('/request', requestRouter)

const userRouter = require('./routes/User')
app.use('/user', userRouter) 





