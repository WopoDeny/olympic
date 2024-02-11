const { Model, DataTypes} = require("sequelize");

const sequelize = require("../initdb")


class Description extends Model {}

Description.init({
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true,
    },
    id_question:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    text: {
        type: DataTypes.STRING,
    }
},{
    sequelize,
    modelName: 'Description',
    createdAt: false,
    updatedAt:false,
})

module.exports = Description;
