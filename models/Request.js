const Sequelize = require('sequelize')

module.exports = sequelize.define("Request", {
    IDRequest: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false 
    },
    TypeRe: Sequelize.STRING(50),
    
})