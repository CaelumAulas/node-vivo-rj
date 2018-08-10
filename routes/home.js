// Injeção de dependencias no Node
module.exports = function(app) {

    app.get('/', function lidaComRequest(request, response) {
        response.send('Qualquer valor muito doido')    
    })
}
