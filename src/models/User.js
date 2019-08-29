const Sequelize = require('../database/server')
const sequelize = require('sequelize');



  const User = Sequelize.define('User', {
    id:{
      type: sequelize.DataTypes.UUIDV4,
      defaultValue: sequelize.DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: sequelize.STRING,
      allowNull: false
    },
    wallet: {
      type: sequelize.FLOAT,
      default: 0
    }
  })
  
module.exports = User