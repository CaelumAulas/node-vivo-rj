const http = require('http')

const server = http.createServer(function lidaComRequests(request, response) {
    console.log(request.method)

    const metodosDoHttps = []
    const rotas = []
    metodosDoHttps['GET'] = rotas
    metodosDoHttps['POST'] = rotas


    rotas['/contato'] = 'Pagina de contato'
    rotas['/'] = 'Pagina de home'

    console.log(rotas[request.url], rotas, request.url)
    if(rotas[request.url]) {
        response.end(rotas[request.url])
    } else {
        response.writeHead(404)
        response.end('404')
    }
    
    // if(request.url == '/contato') {
    //     response.end('Pagina de contato')
    // }

    // if(request.url == '/') {
    //     response.end('Pagina Home')
    // }
})


server.listen(3000, function respostaSeDeuCerto() {
    console.log('Servidor subiu com sucesso na porta 3000')
})