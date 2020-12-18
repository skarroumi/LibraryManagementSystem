const Sequelize = require('sequelize')

module.exports = sequelize.define("StudentRequestBook", {
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
        type: Sequelize.STRING(50),
        allowNull: false,
        references: {
            model: 'Request',
            key: 'IDRe'
        }
    },
})
