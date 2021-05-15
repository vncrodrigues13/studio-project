const AddressModel = require("../models/AddressModel")

module.exports = app => {


    app.get('/address', (request, response) => {
        
    })


    app.post('/address', (request,response) =>{
        const address = request.body
        AddressModel.addAddressResponse(address,response)
        return response
        
    })
}