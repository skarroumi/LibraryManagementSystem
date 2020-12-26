'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.createTable("Category", {
    IDCategory: {
      type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false  
    },
    NameCa: Sequelize.STRING(50),
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
   }, { freezeTableName: true })
  },

  down: async (queryInterface, Sequelize) => {
   return queryInterface.dropTable("Category")
  }
};
