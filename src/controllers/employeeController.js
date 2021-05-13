const { response, request } = require("express")
const dbconnection = require('../infra/dbconnection')
const employeeModel = require('../models/EmployeeModel')

module.exports = app => {
    app.get('/employee', (request, response )=> {
        dbconnection.query('select * from employee', (error, results) => {
            if (error) {
                return response.status(404).json({"error": error})
            } else {
                return response.status(200).json(results)
            }
        })
    })

    app.post('/employee', (request, response) => {
        const employee = request.body
        try{

            employeeModel.addEmployee(employee)
            return response.status(200).json(employee)
        }catch(error){
            return response.status(404).json({"error": error})
        }
        
    })
}