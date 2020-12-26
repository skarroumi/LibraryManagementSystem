'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.createTable("Student", {
    IDStudent: {
      type: Sequelize.STRING(5),
      allowNull: false,
      primaryKey: true,    
  },
  NameSt: Sequelize.STRING(50),
  DivisionSt: Sequelize.STRING(50),
  EmailSt: Sequelize.STRING(50),
  PasswordSt: Sequelize.STRING(200),
  AccessStatusSt: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: true,
},
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
   }, { freezeTableName: true })
  },

  down: async (queryInterface, Sequelize) => {
   return queryInterface.dropTable("Student")
  }
};
