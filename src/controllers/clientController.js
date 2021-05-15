const { response, request } = require("express")
const clientModel = require("../models/ClientModel")
const dbconnection = require('../infra/dbconnection')
const addressModel = require('../models/AddressModel')
module.exports = app => {

    app.get('/client', (request,response)=>{ 
        clientModel.selectAll(response)
        response.setHeader('Access-Control-Allow-Origin', '*');
        response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
        response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
        response.setHeader('Access-Control-Allow-Credentials', true); // If needed
        return response
    })

    app.post('/client', (request,response) => {
        const rawClient = request.body
        response.setHeader('Access-Control-Allow-Origin', '*');
        response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
        response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
        response.setHeader('Access-Control-Allow-Credentials', true); // If needed
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