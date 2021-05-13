const expressConfig = require('./config/expressCfg')
const dbconnection = require('./infra/dbconnection')
const createTabelas = require('./config/tablesCreation')

dbconnection.connect((error) => {

    if (error){
        console.log('Error to connect database')

    }else{

        const app = expressConfig()

        // createTabelas.init(dbconnection)

        app.listen('2121', ()=>{
            console.log('Server is up')
        })
        
    }
})
