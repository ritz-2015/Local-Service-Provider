module.exports = (sequelize, DataTypes) => {
    const ServiceProvider = sequelize.define("ServiceProvider", {
        service_type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        experience: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        time_slot: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        bio: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        rate: {
            type: DataTypes.FLOAT,
            allowNull: false,
        }
    });

    ServiceProvider.associate = (models) => {
        ServiceProvider.belongsTo(models.Users, {
            foreignKey: "userId",
            targetKey: "userId",
            onDelete: "CASCADE",
        });
    };

    return ServiceProvider;
};
