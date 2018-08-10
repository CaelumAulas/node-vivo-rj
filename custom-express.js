const express = require('express')

const app = express() // createServer 

// Middlewares
app.use(express.static('./public'))
// Para cada arquivo da pasta ./public
// app.get('/pasta/arquivo.extensao', function(request,response) {
//     response.renderFile('./public/pasta/arquivo.extensao')
// })

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))

const expressValidator = require('express-validator')
app.use(expressValidator())



const requireDaFuncaoQueVemDoHome = require('./routes/home')
requireDaFuncaoQueVemDoHome(app)

// Estamos executando a função exportada pelo home.js
require('./routes/produtos')(app)


module.exports = app