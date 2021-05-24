const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'sql10.freemysqlhosting.net',
    port: '3306',
    user: 'sql10414543',
    password: 'z5ZFvxZlIr',
    database: 'sql10414543'
})


module.exports = connection