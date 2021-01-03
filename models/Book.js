module.exports = (sequelize, DataTypes) => {
const Book = sequelize.define("Book", {
    ISBN: {
        type: DataTypes.STRING(20),
        allowNull: false,
        primaryKey: true,    
    },
    TitleBo: DataTypes.STRING(200),
    ReleaseDateBo: DataTypes.STRING(50),
    PriceBo: DataTypes.FLOAT(),
    CoverBo: DataTypes.STRING(50),
    DescriptionBo: DataTypes.STRING(),
    PageCountBo: DataTypes.INTEGER(11),
    BorrowedStatusBo: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
}, { freezeTableName: true })

Book.associate = models => {
    Book.belongsTo(models.Author, {
        foreignKey: 'IDAuthor'
    }),
    Book.belongsTo(models.Category, {
        foreignKey: 'IDCategory'
    })
}

return Book
}
