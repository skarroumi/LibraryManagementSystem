const Sequelize = require('sequelize')
const {sequelize} = require('../config/sequelizeModule')

module.exports = sequelize.define("Author", {
    IDAuthor: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false  
    },
    NameAu: Sequelize.STRING(50),
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
 
}, { freezeTableName: true })

