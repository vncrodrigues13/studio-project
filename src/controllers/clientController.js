const { response, request } = require("express")
const clientModel = require("../models/ClientModel")
const dbconnection = require('../infra/dbconnection')
const addressModel = require('../models/AddressModel')
module.exports = app => {

    app.get('/client', (request,response)=>{ 
        clientModel.selectAll(response)
        response.setHeader('Access-Control-Allow-Origin', '*');
        
        return response
    })

    app.post('/client', (request,response) => {
        const rawClient = request.body
        const client = {
            "id": rawClient.id,
            "name": rawClient.name,
            "phone": rawClient.phone,
            "style_music": rawClient.style_music,
            "email": rawClient.email
        }
        clientModel.addClient(client,response)
        const addressToAdd = rawClient.address
        addressModel.addAddress(addressToAdd)
        return response
        
    })
}