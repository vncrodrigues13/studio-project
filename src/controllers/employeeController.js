const { response, request } = require("express")
const dbconnection = require('../infra/dbconnection')
const addressModel = require('../models/AddressModel')
const employeeModel = require('../models/EmployeeModel')

module.exports = app => {
    app.get('/employee', (request, response) => {
        employeeModel.selectAll(response)
        response.setHeader('Access-Control-Allow-Origin', '*');
        response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
        response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
        response.setHeader('Access-Control-Allow-Credentials', true); // If needed
        return response
    })

    app.post('/employee', (request, response) => {
        response.setHeader('Access-Control-Allow-Origin', '*');
        response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
        response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
        response.setHeader('Access-Control-Allow-Credentials', true); // If needed
        const rawEmployee = request.body
        const employee = {
            "id": rawEmployee.id,
            "name": rawEmployee.name,
            "birth_date": rawEmployee.birth_date,
            "email": rawEmployee.email,
            "phone": rawEmployee.phone
        }
        employeeModel.addEmployee(employee, response)
        const addressToAdd = rawEmployee.address
        addressModel.addAddress(addressToAdd)
        return response
    })
}