class tablesCreation{

    init(conexao){
        this.conexao = conexao
        this.criarTabelaClient()
        this.criarTabelaEmployee()
        this.criarTabelaProject()
    }

    criarTabelaEmployee(){
        const sql = 'CREATE TABLE IF NOT EXIST employee (id CHAR(11) PRIMARY KEY,name VARCHAR(255),birth_date DATE,address TEXT,email TEXT,phone CHAR(11))'

        this.conexao.query(sql, error => {
            if (error){
                console.log(error)
            }else{
                console.log('Tabelas Employee criada')
            }
        })
    }
    
    criarTabelaClient(){
        const sql = 'CREATE TABLE client (id CHAR(11) PRIMARY KEY,name VARCHAR(255),address TEXT,phone CHAR(11),style_music ENUM(\'pop\',\'rock\',\'mpb\',\'funk\',\'outros\'))'

        this.conexao.query(sql,error => {
            if (error){
                console.log(error)
            }else{
                console.log('Tabela Client criada')
            }
        })
    }

    criarTabelaProject(){
        const sql = 'CREATE TABLE project (id_project INT NOT NULL,name TEXT,description TEXT,place TEXT,project_date DATE,videoUrl TEXT,clientId CHAR(11),employeeId CHAR(11),PRIMARY KEY(id_project),FOREIGN KEY (clientId) REFERENCES client(id),FOREIGN KEY (employeeId) REFERENCES employee(id))'
        this.conexao.query(sql,error => {
            if (error){
                console.log(error)
            }else{
                console.log('Tabela Project criada')
            }
        })
    }
}

module.exports = new tablesCreation()