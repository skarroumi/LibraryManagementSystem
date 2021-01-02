module.exports = (sequelize, DataTypes) => {
    const Request = sequelize.define("Request", {
        IDRequest: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false 
        },
        TypeRe: DataTypes.STRING(50),
        DescriptionRe: DataTypes.STRING(200),
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    }, { freezeTableName: true })

    Request.associate = models => {
        Request.belongsTo(models.Student, {
            foreignKey: 'IDStudent'
        })
    }
    Request.associate = models => {
        Request.belongsTo(models.Book, {
            foreignKey: 'ISBN',
            allowNull: true
        })
    }
    return Request
    }
    

    