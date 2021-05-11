const { request, response } = require("express")

module.exports = app => {

    app.get('/login', (request, response)=>{
        response.send('Welcome to backend login')
        return response
    })

    app.post('/login', (request, response) => {

        const cpf = request.body.cpf
        const password = request.body.password

        response.json({
            "cpf": cpf,
            "password": password
        })


        console.log(`cpf: ${cpf}`)
        console.log(`password: ${password}`)

        return response
    })
}