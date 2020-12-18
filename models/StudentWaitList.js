
const Sequelize = require('sequelize')

module.exports = sequelize.define("StudentWaitList", {
    IDStudentWaitList: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      IDWaitList: {
        type: Sequelize.STRING(50),
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
})