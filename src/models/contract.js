const { DATE, INTEGER, DATEONLY, BOOLEAN, FLOAT } = require('sequelize');
const { connection } = require('../database/connection');
const { Trainee } = require('./trainee');
const { Category } = require('./category');
const { Companie } = require('./companie');

const Contract = connection.define("contract", {
    traineeId: {
        type: INTEGER,
        references: {
            model: Trainee,
            key: 'id'
        }
    },
    
    categoryId: {
        type: INTEGER,
        references: {
            model: Category,
            key: 'id'
        }
    },
    
    companyId: {
        type: INTEGER,
        references: {
            model: Companie,
            key: 'id'
        }
    },
  
    startValidity: DATEONLY,
    
    endValidity: {
        type: DATEONLY,
        allowNull: true
    },
    
    status: BOOLEAN,
    
    remuneration: FLOAT,
    
    extra: FLOAT,
    
    createdAt: DATE,
    
    updatedAt: DATE,
},
 
{ underscored: true, paranoid: true })

Contract.belongsTo(Trainee)
Contract.belongsTo(Category)
Contract.belongsTo(Companie)

module.exports = { Contract }
