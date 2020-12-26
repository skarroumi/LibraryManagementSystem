const Sequelize = require('sequelize')
const {sequelize} = require('../config/sequelizeModule')

module.exports = sequelize.define("Request", {
    IDRequest: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false 
    },
    TypeRe: Sequelize.STRING(50),
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
}, { freezeTableName: true })