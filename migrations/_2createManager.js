
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
    ConnectionStatusMa: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
  },
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
   }, { freezeTableName: true })
  },

  down: async (queryInterface, Sequelize) => {
   return queryInterface.dropTable("Manager")
  }
};
