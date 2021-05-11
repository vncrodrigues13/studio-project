module.exports = app => {
    app.get('/atendimento', (request,response)=>{
        response.send('Hello world')
        return response
    })
}