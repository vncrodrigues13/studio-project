const dbconnection = require('../infra/dbconnection')


class ProjectModel {

    addProject(project,response) {
        const sql = "INSERT INTO public.project  SET ?"
        dbconnection.query(sql, project, (error, results) => {
            if (error) {
                response.status(400).json({"error": error.sqlMessage})
            } else {
                response.status(200).json(project)
            }
        })
    }



    selectAll(response){
        const sql = "SELECT * FROM public.project"

        dbconnection.query(sql, (error, results) =>{
            if (error){
                response.status(400).json({"error": error.sqlMessage})
            }else{
                response.status(200).json(results)
            }
        })
    }
}


module.exports = new ProjectModel