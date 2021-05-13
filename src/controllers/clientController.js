const { response, request } = require("express")
const clientModel = require("../models/ClientModel")
const dbconnection = require('../infra/dbconnection')
module.exports = app => {

    app.get('/client', (request,response)=>{ 
        //TODO COLOCAR ESSA QUERY NO SERVICE DO CLIENT
        clientModel.selectAllClients(response)
        return response
    })

    app.post('/client', (request,response) => {
        const client = request.body
        clientModel.addClient(client,response)
        return response    
        
    })
}