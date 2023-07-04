const { connection } = require('../database/connection');
const { STRING, DATE, BOOLEAN } = require('sequelize');

const Companie = connection.define("companie", {
    cnpj: STRING,
    company_name: STRING,
    contact: STRING,
    cep: STRING,
    address: STRING,
    neighborhood: STRING,
    city: STRING,
    state: STRING,
    number: STRING,
    complement: STRING,
    rh_analyst_name: STRING,
    supervisor_name: STRING,
    created_at: DATE,
    updated_at: DATE,
    deleted_at: DATE,
},

{ underscored: true, paranoid: true });


module.exports = { Companie }