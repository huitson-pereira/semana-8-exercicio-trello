const { connection } = require('../database/connection');
const { STRING, DATE, BOOLEAN } = require('sequelize');

const Trainee = connection.define("trainee", {
  name: STRING,
  email: STRING,
  rg: {
    type: STRING,
    validate: {
      min: {
        args: 2,
        msg: "Este campo deve ter no mínimo 2 caracteres."
      }
    },
    unique: {
      msg: "Este campo não pode ser preenchido."
    }
  },
  cpf: {
    type: STRING,
    validate: {
      len: {
        args: [11, 11],
        msg: "Este campo deve ter no máximo 11 caracteres."
      },
    },
    unique: {
      msg: "Este campo não pode ser preenchido."
    }
  },
  primaryPhoneContact: STRING,
  secondaryPhoneContact: {
    type: STRING,
    allowNull: true
  },
  dateBirth: DATE,
  fatherName: STRING,
  motherName: STRING,
  haveSpecialNeeds: BOOLEAN,
  createdAt: DATE,
  updatedAt: DATE
},
{ underscored: true, paranoid: true });


module.exports = { Trainee }