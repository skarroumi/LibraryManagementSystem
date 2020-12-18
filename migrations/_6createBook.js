
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.createTable("Book", {
    ISBN: {
        type: Sequelize.STRING(20),
        allowNull: false,
        primaryKey: true,    
    },
    Author: {
        type: Sequelize.INTEGER(11),
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
    CopiesNumberBoo: Sequelize.INTEGER(),
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
   })
  },

  down: async (queryInterface, Sequelize) => {
   return queryInterface.dropTable("Book")
  }
};
