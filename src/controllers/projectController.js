const { response, request } = require("express")
const dbconnection = require('../infra/dbconnection')
const projectModel = require('../models/ProjectModel')


module.exports = app => {


    app.get('/projects', (request,response) => {
        projectModel.selectAll(response)
        res.setHeader('Access-Control-Allow-Origin', '*');
        return response
    })

    app.post('/projects', (request,response) => {
        const project = request.body
        projectModel.addProject(project,response)
        return response
    })
}
