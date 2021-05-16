const { response, request } = require("express")
const dbconnection = require('../infra/dbconnection')
const projectModel = require('../models/ProjectModel')


module.exports = app => {


    app.get('/project', (request, response) => {
        projectModel.selectAll(response)
        response.setHeader('Access-Control-Allow-Origin', '*');
        response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
        response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
        response.setHeader('Access-Control-Allow-Credentials', true); // If needed
        return response
    })

    app.post('/project', (request, response) => {

        const project = request.body
        response.setHeader('Access-Control-Allow-Origin', '*');
        response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
        response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
        response.setHeader('Access-Control-Allow-Credentials', true); // If needed
        projectModel.addProject(project, response)
        return response
    })
}