const { Model, DataTypes} = require("sequelize");

const sequelize = require("../initdb")


class Supplement extends Model {}

Supplement.init({
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true,
    },
    id_question_s:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    path_supplement:{
        type: DataTypes.INTEGER
},
    supplement:{
        type: DataTypes.BLOB
    }
},

{
    sequelize,
    modelName: 'Supplement',
    createdAt: false,
    updatedAt:false,
})


module.exports = Supplement;