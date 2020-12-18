const Sequelize = require('sequelize')

module.exports = sequelize.define("Student", {
    IDManager: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false  
    },
    NameMa: Sequelize.STRING(50),
    UsernameMa: Sequelize.STRING(50),
    PasswordMa: Sequelize.STRING(50),
})