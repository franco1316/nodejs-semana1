const { Sequelize } = require( 'sequelize' )

const db = new Sequelize({

    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'franco1316',
    database: 'compUser',
    logging: false

})


module.exports = { db }