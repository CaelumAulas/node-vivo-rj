const mssql = require('mssql')
const mysql = require('mysql')


// MySQL
function connectionFactory() {

    return new Promise((resolve, reject) => {
        const connection = mysql.createConnection({
            user: 'root',
            password: '',
            host: 'localhost',
            database: 'livraria',
            connectionLimit : 10
        })

        resolve(connection)
    })

}

// SQL Server
// function connectionFactory() {
//     mssql.close()

//     return new Promise((resolve, reject) => {
//         mssql.connect({
//             user: 'sa',
//             password: '1Secure*Password1',
//             server: 'localhost',
//             database: 'livraria',
//         })
//         .then((conn) => {
//             resolve(new mssql.Request())
//         })
//         .catch((err) => {
//             reject(err)
//         })
//     })
// }

module.exports = connectionFactory