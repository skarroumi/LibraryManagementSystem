module.exports = (sequelize, DataTypes) => {
const Author = sequelize.define("Author", {
    IDAuthor: {
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false  
    },
    NameAu: DataTypes.STRING(50),
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
}, { freezeTableName: true })

Author.associate = models => {
    Author.hasMany(models.Book, {
        as: 'Author', foreignKey: 'IDAuthor'
    })
}
return Author
}

