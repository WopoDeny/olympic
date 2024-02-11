const { Model, DataTypes} = require("sequelize");

const Leader_board = require("./leader_board")
const Questions = require("./questions")
const UserAnswer = require("./useranswer")
const sequelize = require("../initdb")


class Olimpiad extends Model {
}
Olimpiad.init({
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true,
    },
    name_olimpiad:{
        type: DataTypes.STRING,
    },
    date_start:{
        type: DataTypes.INTEGER
    },
    date_end: {
        type: DataTypes.INTEGER
    }, 
    work_time:{
        type: DataTypes.INTEGER
    },
},{
    sequelize,
    modelName: 'Olimpiad',
    createdAt: false,
    updatedAt:false,
})

Olimpiad.hasMany(Questions, {as:'id_olimpiad', foreignKey: 'id_olimpiad'});
Olimpiad.hasOne(UserAnswer, {as:'id_olimpiad_UA', foreignKey: 'id_olimpiad_UA'});
Olimpiad.hasMany(Leader_board,{as:'id_olimp', foreignKey: 'id_olimp'})
module.exports = Olimpiad;
