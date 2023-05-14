const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD, 
    {
        host: 'localhost', // database host
        dialect: 'mysql', // database type
        port: 3001 // database port
    }
)

module.exports = sequelize;