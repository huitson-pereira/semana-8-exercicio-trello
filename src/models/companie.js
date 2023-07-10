const { connection } = require('../database/connection');
const { STRING, DATE, BOOLEAN } = require('sequelize');

const Companie = connection.define("companie", {
    cnpj: STRING,
    companyName: STRING,
    contact: STRING,
    cep: STRING,
    address: STRING,
    neighborhood: STRING,
    city: STRING,
    state: STRING,
    number: STRING,
    complement: STRING,
    rhAnalystName: STRING,
    supervisorName: STRING,
    createdAt: DATE,
    updatedAt: DATE,
    deletedAt: DATE,
},

{ underscored: true, paranoid: true });


module.exports = { Companie }