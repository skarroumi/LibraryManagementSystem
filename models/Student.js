const Sequelize = require('sequelize')
const {sequelize} = require('../config/sequelizeModule')

module.exports = sequelize.define("Student", {
    IDStudent: {
        type: Sequelize.STRING(5),
        allowNull: false,
        primaryKey: true,    
    },
    NameSt: Sequelize.STRING(50),
    DivisionSt: Sequelize.STRING(50),
    EmailSt: Sequelize.STRING(50),
    PasswordSt: Sequelize.STRING(200),
    AccessStatusSt: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
}, { freezeTableName: true })


