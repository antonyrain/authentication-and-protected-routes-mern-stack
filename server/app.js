const config = require('./utils/config')
const express = require('express')
const cors = require('cors')
const app = express()

const reviewRouter = require('./controllers/review')
const singupRouter = require('./controllers/singup')
const loginRouter = require('./controllers/login')

const connectDB = require('./database/connectDB')
connectDB()

app.use(cors())
app.use(express.json())
app.use('/api/review', reviewRouter)
app.use('/api/singup', singupRouter)
app.use('/api/login', loginRouter)

module.exports = app