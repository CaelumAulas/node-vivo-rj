module.exports = function(connectionFactory) {
    console.log('Passamos a connection factory')
    const produtosDAO = {
        pegaUmPorId: function(id, blocoPraExecutarDepois) {
            console.log('Dentro do pega um por iD')
            connectionFactory()
                .then(function(connection) {
                    connection.query(
                        `SELECT * FROM produtos WHERE id = ${id}`
                        ,function(err, results) {
                            blocoPraExecutarDepois(err, results)
                        })
                })
        },
        cadastrar: function(produtoASerCadastrado, callback) {
            connectionFactory()
            .then(function(connection) {
                const produtoDTO = { // DTO = Data Transfer Object
                    titulo: produtoASerCadastrado.titulo,
                    preco: produtoASerCadastrado.preco,
                    descricao: produtoASerCadastrado.descricao
                }
// SQL Injection
connection.query(
    `INSERT INTO produtos (titulo, descricao, preco)
    VALUES ('${produtoDTO.titulo}','${produtoDTO.descricao}','${produtoDTO.preco}')`
    ,callback)
            })
        }

    }    
    return produtosDAO
}