const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'session13',//database name
    'postgres', // username
    'password', //password
    {
        host: 'localhost',
        dialect: 'postgres'
    }
)

module.exports = sequelize;