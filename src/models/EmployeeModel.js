const dbconnection = require('../infra/dbconnection')
class EmployeeModel{

    addEmployee(employee) {
        const sql = "INSERT INTO employee  SET ?"
        dbconnection.query(sql, employee, (error, results) => {
            if (error) {
                throw Error('ERROR TO INSERT A NEW PROJECT ON DATABASE')
            } else {
                console.log('Added a employee on database')
            }
        })
    }
}


module.exports = new EmployeeModel