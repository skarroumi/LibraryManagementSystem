'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.createTable("Author", {
    IDAuthor: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false  
    },
    NameAu: Sequelize.STRING(50),
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
   }, { freezeTableName: true })
  },

  down: async (queryInterface, Sequelize) => {
   return queryInterface.dropTable("Author")
  }
};
