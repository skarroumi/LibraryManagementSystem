const Sequelize = require('sequelize')
const {sequelize} = require('../config/sequelizeModule')

module.exports = sequelize.define("WaitList", {
    IDWaitList: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false   
    },
    forBook: {
        type: Sequelize.STRING(50),
        allowNull: false,
        references: {
            model: 'Book',
            key: 'ISBN'
        }
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
}, { freezeTableName: true })