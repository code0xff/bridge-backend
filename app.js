const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

const xchainRouter = require('./routes/xchain')
const evaluationRouter = require('./routes/evaluation')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/xchain', xchainRouter)
app.use('/evaluation', evaluationRouter)

module.exports = app
