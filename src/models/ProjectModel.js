const dbconnection = require('../infra/dbconnection')


class ProjectModel {

    addProject(project) {
        const sql = "INSERT INTO project  SET ?"
        dbconnection.query(sql, project, (error, results) => {
            if (error) {
                throw Error('ERROR TO INSERT A NEW PROJECT ON DATABASE')
            } else {
                console.log('Added a project on database')
            }
        })
    }
}


module.exports = new ProjectModel