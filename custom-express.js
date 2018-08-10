const express = require('express')

const app = express() // createServer 

// Permitir que qualquer interface
// gráfica pegue os dados da aplicação
const cors = require('cors')
app.use(cors())

// Middlewares (vermelho)
app.use(express.static('./public'))
// Para cada arquivo da pasta ./public
// app.get('/pasta/arquivo.extensao', function(request,response) {
//     response.renderFile('./public/pasta/arquivo.extensao')
// })


const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))

const expressValidator = require('express-validator')
app.use(expressValidator())


// Rotas (azul)
const requireDaFuncaoQueVemDoHome = require('./routes/home')
requireDaFuncaoQueVemDoHome(app)

// Estamos executando a função exportada pelo home.js
require('./routes/produtos')(app)

// https://github.com/CaelumAulas/node-vivo-rj
// Tratamentos de Erro (vermelho)
// Pegando o erro 404
app.use(function(request, response, next) {
    response.status(404).send('Você caiu na página 404')
})

// Erros Internos do Servidor
app.use(function(err, req, res, next) {
    console.log('Erro passado: ', err)
    res.status(500)
    res.send(`Something broke! ${err}`);
});

 
module.exports = app