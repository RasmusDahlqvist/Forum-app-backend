const config = require('./utils/config')
const express = require('express')
const app = express()
require('express-async-errors')
const cors = require('cors')
const messagesRouter = require('./controllers/messages')
const usersRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')
const mongoose = require('mongoose')



console.log('connecting to ', config.MONGODB_URI)


mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(result => {
    console.log('Connected to MongoDB')
})
.catch((error) => {
    console.log('erro connecting to mongodb:', error.message)
})







app.use(express.static('build'))
app.use(express.json())
app.use(cors())
app.use('/api/messages', messagesRouter)
app.use('/api/users', usersRouter)
app.use('/api/login', loginRouter)
module.exports = app