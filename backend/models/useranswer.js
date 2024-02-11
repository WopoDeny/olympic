const { Model, DataTypes} = require("sequelize");

const sequelize = require("../initdb")

class UserAnswer extends Model {}
UserAnswer.init({
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true,
    },
    id_user:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    id_user_question:{
        type: DataTypes.INTEGER
    },
    id_answer: {
        type: DataTypes.INTEGER
    },
    id_olimpiad_UA:{
        type: DataTypes.INTEGER
    },
    status: {
        type: DataTypes.INTEGER
    }
    
},
{
    sequelize,
    modelName: 'UserAnswer',
    createdAt: false,
    updatedAt:false,
})

module.exports = UserAnswer;