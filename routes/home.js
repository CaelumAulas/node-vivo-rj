// Injeção de dependencias no Node
module.exports = function(app) {

    app.get('/', function lidaComRequest(request, response, next) {
        response.send('Qualquer valor muito doido')    
    })
}
