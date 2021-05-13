const dbconnection = require('../infra/dbconnection')

class ClientModel {

    addClient(client,response) {
        const sql = "INSERT INTO client  SET ?"
        dbconnection.query(sql, client, (error, resultados) => {
            if (error) {
                response.status(400).json({"error": error.sqlMessage})
            } else {
                response.status(200).json(client)
            }
        })
    }


    selectAllClients(response) {
        const sql = 'SELECT * FROM `client`'
        
        dbconnection.query(sql,(error, results) => {
            if (error){
                response.status(404).json(error.sqlMessage)
            }else{
                response.status(200).json(results)
            }
        })
    }


    select() {
        return dbconnection.query('select * from client').RowDataPacket().toString()
    }



    // getLastRecord() {
    //     return new Promise(function (resolve, reject) {
    //         dbconnection.query('select * from client', function (err, rows, fields) {
    //             // Call reject on error states,
    //             // call resolve with results
    //             if (err) {
    //                 return reject(err);
    //             }
    //             resolve(rows);
    //         });
    //     }).then( () => {
    //         return resolve
    //     }) ;
    // }

}


module.exports = new ClientModel