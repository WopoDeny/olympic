const { Model, DataTypes} = require("sequelize");
const sequelize = require("../initdb")


class Leader_board extends Model {}

Leader_board.init({
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true,
    },
    id_olimp:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    user_name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    score_user:{
        type: DataTypes.INTEGER,
        allowNull: false,
    }
},{
    sequelize,
    modelName: 'Leader_board',
    createdAt: false,
    updatedAt:false,
})

module.exports = Leader_board;