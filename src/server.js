const express = require("express");
const cors = require("cors");
const connection = require("./database/connection");
const routes = require('./routes')

class Server {
    constuctor(server = express()){
        this.midlewares(server);
        this.database();        
        this.routes(server)
        this.initializeServer(server)       
    }

    async midlewares(app){
        app.use(cors());
        app.use(express.json())
    }

    async database(){
        try{
            await connection.authenticate();
            console.log("Conexão bem sucedida")
        } catch(error){
            console.error("Não foi possível conectar no banco de dados.", error);
        }
    }

    async routes(app) {
        app.use(routes) 
    }

    async initializeServer(app){
        const PORT = 3333;
        app.listen(PORT, ()=> console.log(`Servidor executando na porta ${PORT}`))
    }
}

module.exports = { Server }