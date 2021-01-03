module.exports = (sequelize, DataTypes) => {
const Student = sequelize.define("Student", {
    IDStudent: {
        type: DataTypes.STRING(5),
        allowNull: false,
        primaryKey: true,    
    },
    NameSt: DataTypes.STRING(50),
    DivisionSt: DataTypes.STRING(50),
    EmailSt: DataTypes.STRING(50),
    PasswordSt: DataTypes.STRING(200),
    AccessStatusSt: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
}, { freezeTableName: true })


Student.associate = models => {
    Student.hasMany(models.Request, {
        as: 'Student', foreignKey: 'IDStudent'
    }),
    Student.belongsTo(models.WaitList, {
        foreignKey: 'IDWaitList',
        allowNull: true
    })
}

    return Student
    }
    
    