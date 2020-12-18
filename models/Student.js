const Sequelize = require('sequelize')

module.exports = sequelize.define("Student", {
    IDStudent: {
        type: Sequelize.STRING(5),
        allowNull: false,
        primaryKey: true,    
    },
    NameSt: Sequelize.STRING(50),
    DivisionSt: Sequelize.STRING(50),
    EmailSt: Sequelize.STRING(50),
    PasswordSt: Sequelize.STRING(50),
})