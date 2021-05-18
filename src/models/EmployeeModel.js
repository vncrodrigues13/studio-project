const dbconnection = require('../infra/dbconnection')
class EmployeeModel{

    addEmployee(employee, response) {
        const sql = "INSERT INTO employee SET ?"
        dbconnection.query(sql, employee, (error, results) => {
            if (error) {
                response.status(400).json({"error": error.sqlMessage})
            } else {
                response.status(200).json(employee)
            }
        })
    }



    selectAll(response){
        const sql = "SELECT * FROM employee"

        dbconnection.query(sql, (error, results) =>{
            if (error){
                response.status(400).json({"error": error.sqlMessage})
            }else{
                response.status(200).json(results)
            }
        })
    }
}


module.exports = new EmployeeModel