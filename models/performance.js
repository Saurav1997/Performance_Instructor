const Sequelize = require('sequelize');

const db = require('../database/db');

const Performance = db.define('performance',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement : true,
        allowNull: false,
        primaryKey: true
    },
    computer_name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    
    cpu_percentage: {
        type: Sequelize.INTEGER
    },
    
    memory_percentage: {
        type: Sequelize.INTEGER
    },
    
    storage_percentage: {
        type: Sequelize.INTEGER
    },
});

module.exports = Performance;


