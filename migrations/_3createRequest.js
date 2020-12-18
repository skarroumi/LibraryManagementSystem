
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.createTable("Request", {
    IDRequest: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false 
    },
    TypeRe: Sequelize.STRING(50),
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
   })
  },

  down: async (queryInterface, Sequelize) => {
   return queryInterface.dropTable("Request")
  }
};
