
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.createTable("Manager", {
    IDManager: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false  
    },
    NameMa: Sequelize.STRING(50),
    UsernameMa: Sequelize.STRING(50),
    PasswordMa: Sequelize.STRING(50),
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
   })
  },

  down: async (queryInterface, Sequelize) => {
   return queryInterface.dropTable("Manager")
  }
};
