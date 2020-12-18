
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.createTable("StudentWaitList", {
    IDStudentWaitList: {
      type: Sequelize.INTEGER(11),
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    IDWaitList: {
      type: Sequelize.INTEGER(11),
      allowNull: false, 
      references: {
          model: 'WaitList',
          key: 'IDWaitList'
      }
  },
  IDStudent: {
      type: Sequelize.STRING(5),
      allowNull: false,
      references: {
          model: 'Student',
          key: 'IDStudent'
      }   
  },
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
   })
  },

  down: async (queryInterface, Sequelize) => {
   return queryInterface.dropTable("StudentWaitList")
  }
};
