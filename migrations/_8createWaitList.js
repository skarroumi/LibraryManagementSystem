
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.createTable("WaitList", {
    IDWaitList: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false   
    },
    forBook: {
        type: Sequelize.STRING(20),
        allowNull: false,
        references: {
            model: 'Book',
            key: 'ISBN'
        }
    },
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
   })
  },

  down: async (queryInterface, Sequelize) => {
   return queryInterface.dropTable("WaitList")
  }
};
