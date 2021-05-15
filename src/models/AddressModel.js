const dbconnection = require('../infra/dbconnection')

class AddressModel{ 

    addAddress(address){
        const sql = 'INSERT INTO  address SET ?'
        console.log(address)
        dbconnection.query(sql,address,(erro, result) => {
            if (erro){
                console.log(erro)
            }
        })
    }

    addAddressResponse(address,response){
        const sql = 'INSERT INTO  address SET ?'

        dbconnection.query(sql,address,(erro, result) => {
            if (erro){
                response.status(400).json({"error": erro})
            }
            else{
                response.status(200).json(address)
            }
        })
    }

    getAddresByClientId(id, address){
        const sql = `SELECT * from address where client_id = ${id}`

        dbconnection.query(sql,(error, results)=> {
            if (erro){
                throw Error(`Error at address creation`)
            }else{
                address = results
            }
        })
    }

}


module.exports = new AddressModel