var express = require('express');
var router = express.Router();
const userDB = require("../models/users")

router.post('/',async (req, res) =>{
    let email = req.body.email;
    let name = req.body.first_name + ' ' + req.body.last_name;
    let token = req.body.token; // исправить на токен !!!!

    const user = await userDB.findOne({where: {
        'name':name,
        'email':email,
        'token':token,
    }
});
if (user){
    console.log(user.id);
    res.json({id_user:user.id,
        status: 'success',
    })
}
else{
    const user = await userDB.create({name: name, email: email, token: token})
    console.log('Пользователь добавлен');
    res.json({id_user:user.id,
        status: 'success',
    })
    }
})

module.exports = router;
