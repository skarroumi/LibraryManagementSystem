module.exports = (sequelize, DataTypes) => {
const Manager = sequelize.define("Manager", {
    IDManager: {
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false  
    },
    NameMa: DataTypes.STRING(50),
    UsernameMa: DataTypes.STRING(50),
    PasswordMa: DataTypes.STRING(50),
    ConnectionStatusMa: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    }, { freezeTableName: true })
return Manager
}

