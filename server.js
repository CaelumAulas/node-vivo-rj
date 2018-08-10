const app = require('./custom-express')

const port = 3000
app.listen(port, function executaSeDerTudoCerto() {
    // console.log('Servidor subiu com sucessinhos na porta ' + port)
    // Template String
    console.log(`Servidor subiu com sucessinhos na porta ${port}`)
})

