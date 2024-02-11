var express = require('express');
const { STRING } = require('sequelize');
var router = express.Router();
const userDB = require('../models/users');



router.post('/', async (req,res)=> {
    console.log('есть контакт ');
    var name = req.query.name // body<--- query
    var class_ = String(req.query.class);
    var schol = String(req.query.schol);
    console.log(typeof class_);
    console.log(typeof schol);
    if (name) {
        const user_update = await userDB.update({class:class_,school:schol },{
            where: {name:name}
            
        })
        if (user_update) {
            console.log('Пользователь изменил данные')
            console.log(user_update)

        }
        else{
            console.log('Ошибка')
        }
    }
    else{
        console.log('class_ && schol не работает')
    }

});
module.exports = router;
