const { Model, DataTypes} = require("sequelize");
const sequelize = require("../initdb")


class Answers extends Model {}

Answers.init({
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true,
    },
    id_questions:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    text:{
        type: DataTypes.STRING
    },
    status: {
        type: DataTypes.INTEGER
    }
},{
    sequelize,
    modelName: 'Answers',
    createdAt: false,
    updatedAt:false,
})

module.exports = Answers;