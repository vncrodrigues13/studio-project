const { response, request } = require("express")
const dbconnection = require('../infra/dbconnection')
const projectModel = require('../models/ProjectModel')


module.exports = app => {


    app.get('/projects', (request,response) => {

        dbconnection.query('select * from project',[], (error, results) => {
            if (error) {
                return response.status(404).json({"error": error})
            } else {
                return response.status(200).json(results)
            }
        })
    })

    app.post('/projects', (request,response) => {
        const project = request.body
        try{
            projectModel.addProject(project)
            return response.status(200).json(project)
        }catch(error){
            return response.status(404).json({"error": error})
        }
    })
}
