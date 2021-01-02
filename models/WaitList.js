module.exports = (sequelize, DataTypes) => {
const WaitList = sequelize.define("WaitList", {
    IDWaitList: {
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false   
    },
    forBook: {
        type: DataTypes.STRING(50),
        allowNull: false,
        references: {
            model: 'Book',
            key: 'ISBN'
        }
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
}, { freezeTableName: true })

WaitList.associate = models => {
    WaitList.hasMany(models.Student, {
        foreignKey: 'IDWaitList'
    })
}

WaitList.associate = models => {
    WaitList.belongsTo(models.Book, {
        as: 'Book', foreignKey: 'ISBN'
    })
}
return WaitList
}