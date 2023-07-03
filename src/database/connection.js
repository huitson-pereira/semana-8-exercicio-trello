const { Sequelize } = require("sequelize");
const dataConfig = require("../config/database.config");
const connection = new Sequelize(dataConfig);

module.exports = { connection }