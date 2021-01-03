module.exports = (sequelize, DataTypes) => {
const WaitList = sequelize.define("WaitList", {
    IDWaitList: {
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false   
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
}, { freezeTableName: true })

WaitList.associate = models => {
    WaitList.hasMany(models.Student, {
        as: 'WaitList', foreignKey: 'IDWaitList'
    }),
    WaitList.belongsTo(models.Book, {
        as: 'Book', foreignKey: 'ISBN'
    })
}

return WaitList
}