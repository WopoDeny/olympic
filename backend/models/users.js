const { Model, DataTypes} = require("sequelize");
//import UserAnswer from "../useranswer.js";
const sequelize = require("../initdb")
const UserAnswer = require("./useranswer")
class Users extends Model {
}
Users.init({
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true,
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    class:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    school:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    email:{
        type: DataTypes.STRING
    },
    token: {
        type: DataTypes.STRING
    }
},{
    sequelize,
    modelName: 'Users',
    createdAt: false,
    updatedAt:false,
})

Users.hasMany(UserAnswer, {as:'id_user', foreignKey: 'id_user'})

module.exports = Users;