const express = require("express");
const cors = require("cors");
const connection = require("./database/connection");

class Server {
    constuctor(server = express()){
        this.midlewares(server);
        this.database();
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

    async initializeServer(app){
        const PORT = 3333;
        app.listen(PORT, ()=> console.log(`Servidor executando na porta ${PORT}`))
    }
}

module.exports = { Server }