module.exports = function(app) {
    app.get('/produtos/form', function(req, res) {
        res.render('produtos/form.ejs')
    })

    app.post('/produtos', function(req,res) {
        const connectionFactory = require('../infra/connectionFactory')
        const produtosDAO = require('../infra/ProdutosDAO')(connectionFactory)
        const produtoNovo = req.body

        // https://express-validator.github.io/docs/custom-error-messages.html
        req.assert('titulo', 'Titulo deve ser preenchido')
            .notEmpty()

        req.assert('preco', 'Preço deve deve ser um float')
            .isFloat()

        // Com erros, valida e mostra pro usuário
        if(req.validationErrors().length > 0) {
            res.status(400).render('produtos/form.ejs', {
                erros: req.validationErrors()
            })
        } else {
            // Sem erros, cadastra no banco
            function blocoPraExecutarDepois(err, resultado) {
                console.log(err)
                if(err) {
                    res.status(400).send('Deu tudo errado #xateado')
                } else {
                    res.redirect('/produtos')
                }
            }
            produtosDAO.cadastrar(produtoNovo, blocoPraExecutarDepois)
        }        


    })

    // # Desafio: Fazer o if caso não exista produto
    app.get('/produtos/:id', function(request, response) {
        const connectionFactory = require('../infra/connectionFactory')
        const produtosDAO = require('../infra/ProdutosDAO')(connectionFactory)

        function blocoPraExecutarDepois(err, produto) {
            console.log('Executou depois da query')
            response.render('produtos/lista.ejs', {
                livros: produto
            })
        }
        produtosDAO.pegaUmPorId(request.params.id, blocoPraExecutarDepois)
    })

    app.get('/produtos', function (request, response) {

        // Design Pattern
        const connectionFactory = require('../infra/connectionFactory')

        // SQL Server
        // connectionFactory()
        // .then((connection) => {  
        //     connection.query('SELECT * FROM persons', (err, result) => {
        //         console.log(result)
        //         response.send(result.recordset)
        //     })
        // })
        
        // MySQL
        connectionFactory()
        .then(function (connection) {
            connection.query('SELECT * FROM produtos', (err, result) => {
                response.render('produtos/lista.ejs', {
                    livros: result
                })
            })
        })
    })
}


