const { Model, DataTypes} = require("sequelize");


const Answers = require("./answers")
const Description = require("./description")
const sequelize = require("../initdb")

class Questions extends Model {}

Questions.init({
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true,
    },
    id_olimpiad:{
        type: DataTypes.INTEGER,
    },
    name:{
        type: DataTypes.STRING
    },
    type: {
        type: DataTypes.INTEGER
    }
    
},{
    sequelize,
    modelName: 'Questions',
    createdAt: false,
    updatedAt:false,
})

Questions.hasMany(Answers, {as:'id_questions', foreignKey: 'id_questions'})
Questions.hasOne(Description,{as:'id_question', foreignKey:'id_question'})
module.exports = Questions;