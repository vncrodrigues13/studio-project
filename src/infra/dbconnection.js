const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'sql10.freemysqlhosting.net',
    port: '3306',
    user: 'sql10412198',
    password: 'Sa1TVA6CaE',
    database: 'sql10412198'
})


module.exports = connection