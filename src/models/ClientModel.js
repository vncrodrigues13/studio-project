const { query } = require('express')
const dbconnection = require('../infra/dbconnection')

class ClientModel {

    addClient(client, response) {
        const sql = "INSERT INTO  client  SET ?"
        dbconnection.query(sql, client, (error, resultados) => {
            if (error) {
                response.status(400).json({ "error": error.sqlMessage })
            } else {
                response.status(200).json(client)
            }
        })
    }


    selectAll(response) {
        const sql = 'SELECT * FROM client'

        dbconnection.query(sql, (error, results) => {
            if (error) {
                response.status(400).json(error.sqlMessage)
            } else {
                response.status(200).json(results)
            }
        })
    }
}


module.exports = new ClientModel