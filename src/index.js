const expressConfig = require('./config/expressCfg')
const dbconnection = require('./infra/dbconnection')


dbconnection.connect((error) => {

    if (error){

        console.log('Error to connect database')

    }else{

        const app = expressConfig()

        console.log('Database connected')

        app.listen('2121', ()=>{

            console.log('Server is up')
            
        })
    }
})
