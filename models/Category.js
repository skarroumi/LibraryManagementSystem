const Sequelize = require('sequelize')

module.exports = sequelize.define("Category", {
    IDCategory: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false  
    },
    NameCa: Sequelize.STRING(50),
})