const Sequelize = require('sequelize')

module.exports = sequelize.define("Author", {
    IDAuthor: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false  
    },
    NameAu: Sequelize.STRING(50),
})