module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
        userId: {  // 👈 define userId as primary key
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: { isEmail: true },
        },
        phoneno: {
            type: DataTypes.BIGINT,
            allowNull: false,
            validate: {
                min: 1000000000,
                max: 999999999999999
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        role: {
            type: DataTypes.ENUM("customer", "provider"),
            allowNull: false,
        }
    });

    Users.associate = (models) => {
        Users.hasOne(models.ServiceProvider, {
            foreignKey: "userId",
            onDelete: "CASCADE"
        });
    };

    return Users;
};
