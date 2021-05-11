module.exports = app => {
    app.get('/', (request, response)=>{
        response.send('Hello home page')
        return response
    })
}