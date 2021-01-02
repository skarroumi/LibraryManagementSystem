module.exports = (sequelize, DataTypes) => {
const Category = sequelize.define("Category", {
    IDCategory: {
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false  
    },
    NameCa: DataTypes.STRING(50),
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
}, { freezeTableName: true })

Category.associate = models => {
    Category.hasMany(models.Book, {
        as: 'Category', foreignKey: 'IDCategory'
    })
}
return Category
}