const Sequelize = require('sequelize');

const db = require('../database/db');

const User = db.define('user',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement : true,
        allowNull: false,
        primaryKey: true
    },
    email: {
        type: Sequelize.STRING,
        unique : true
    },
    
    password: {
        type: Sequelize.STRING
    }
});

module.exports = User;


