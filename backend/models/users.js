module.exports=(sequelize,DataTypes)=>{
    const Users=sequelize.define("Users",{
        name:{
            type: DataTypes.STRING,
            allowNull:false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: { isEmail: true },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        role: {
            type: DataTypes.ENUM("customer", "provider"),
            allowNull: false,
        }
    }); //Users-table name
    // name, email,password,role-attributes along with some default aattributes
    

    return Users
};