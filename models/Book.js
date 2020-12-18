const Sequelize = require('sequelize')

module.exports = sequelize.define("Book", {
    ISBN: {
        type: Sequelize.STRING(20),
        allowNull: false,
        primaryKey: true,    
    },
    Author: {
        type: Sequelize.STRING(50),
        allowNull: false,
        references: {
            model: 'Author',
            key: 'IDAuthor'
        }
    },
    Category: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references: {
            model: 'Category',
            key: 'IDCategory'
        }   
    },
    TitleBo: Sequelize.STRING(50),
    ReleaseDateBo: Sequelize.STRING(50),
    PriceBo: Sequelize.FLOAT(),
    CoverBo: Sequelize.STRING(50),
    CopiesNumberBoo: Sequelize.INTEGER()
})