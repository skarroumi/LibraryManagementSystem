
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.createTable("StudentRequestBook", {
    IDStudentRequestBook: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
    ISBN: {
        type: Sequelize.STRING(50),
        allowNull: false, 
        references: {
            model: 'Book',
            key: 'ISBN'
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
    IDRequest: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references: {
            model: 'Request',
            key: 'IDRequest'
        }
    },
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
   })
  },

  down: async (queryInterface, Sequelize) => {
   return queryInterface.dropTable("StudentRequestBook")
  }
};
